import { Inject, Injectable } from '@nestjs/common';
import { CompanyOrderEntityInterface } from '../../../domain/repositories/company-order.repository.interface';
import { CompanyOrderEntity } from '../entities/company-order.entity';
import { CompanyEntity } from '../entities/company.entity';
import { IndividualOrderEntity } from '../entities/individual-order.entity';
import { EmployeeEntity } from '../entities/employee.entity';
import { DishEntity } from '../entities/dish.entity';
import { ICompanyOrder } from 'src/domain/models/company-order.model';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class CompanyOrderRepository {
  constructor(
    @Inject('COMPANY_ORDER_ENTITY')
    private readonly companyOrderEntity: typeof CompanyOrderEntity,
  ) {}

  async create(order: Omit<CompanyOrderEntityInterface, 'id'>): Promise<CompanyOrderEntityInterface> {
    return await this.companyOrderEntity.create(order);
  }

  async update(
    id: number,
    orderData: Partial<Omit<CompanyOrderEntityInterface, 'id'>>,
  ): Promise<CompanyOrderEntityInterface> {
    const order = await this.companyOrderEntity.findByPk(id);
    return await order.update(orderData);
  }

  async getById(id: number): Promise<CompanyOrderEntityInterface | null> {
    return await this.companyOrderEntity.findByPk(id, {
      include: ['collaboratorsOrders'],
    });
  }

  async listByCompany(companyId: number): Promise<CompanyOrderEntityInterface[]> {
    return await this.companyOrderEntity.findAll({ where: { companyId } });
  }

  async findOrdersByRestaurant(restaurantId: number): Promise<ICompanyOrder[]> {
    const companyOrders = await this.companyOrderEntity.findAll({
      where: { restaurantId },
      include: [
        {
          model: CompanyEntity,
          include: [
            {
              model: UserEntity,
              as: 'user',
            },
          ],
        },
        {
          model: IndividualOrderEntity,
          as: 'collaboratorsOrders',
          include: [
            {
              model: EmployeeEntity,
              include: [
                {
                  model: UserEntity,
                  as: 'user',
                },
              ],
            },
            {
              model: DishEntity,
            },
          ],
        },
      ],
    });

    return companyOrders.map(order => {
      const plainOrder = order.get({ plain: true });
      
      // Calcular preço total
      const totalPrice = plainOrder.collaboratorsOrders?.reduce((total, empOrder) => {
        return total + (empOrder.dish?.price || 0);
      }, 0) || 0;

      // Mapear status do backend para o frontend
      const statusMap = {
        'pending': 'Enviado',
        'confirmed': 'Confirmado',
        'preparing': 'Preparando',
        'delivered': 'Entregue',
        'canceled': 'Cancelado',
      };

      return {
        id: plainOrder.id,
        code: `FC-${plainOrder.id}`,
        totalPrice,
        status: statusMap[plainOrder.status] || 'Enviado',
        restaurantId: plainOrder.restaurantId,
        company: {
          id: plainOrder.company?.id || 0,
          name: plainOrder.company?.user?.name || 'Empresa',
          image: plainOrder.company?.user?.image || '',
        },
        employeeOrders: plainOrder.collaboratorsOrders?.map(empOrder => ({
          id: empOrder.id,
          status: 'Preparando', // Status individual do pedido do funcionário
          employee: {
            id: empOrder.employee?.id || 0,
            name: empOrder.employee?.user?.name || 'Funcionário',
            image: empOrder.employee?.user?.image || '',
          },
          dish: {
            id: empOrder.dish?.id || 0,
            name: empOrder.dish?.name || 'Prato',
            image: empOrder.dish?.image || '',
            price: empOrder.dish?.price || 0,
            restaurantId: empOrder.dish?.restaurantId || 0,
          },
        })) || [],
      };
    });
  }

  async listByRestaurant(restaurantId: number): Promise<CompanyOrderEntityInterface[]> {
    return await this.companyOrderEntity.findAll({ where: { restaurantId } });
  }

  async updateStatus(id: number, status: string): Promise<CompanyOrderEntityInterface> {
    const order = await this.companyOrderEntity.findByPk(id);
    return await order.update({ status });
  }

  async delete(id: number): Promise<void> {
    const order = await this.companyOrderEntity.findByPk(id);
    await order.destroy();
  }
}