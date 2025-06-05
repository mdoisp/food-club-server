// repositories/company-order.repository.ts
import { Inject, Injectable } from '@nestjs/common';
import { CompanyOrderEntityInterface } from '../interfaces/company-order.interface';
import { CompanyOrderEntity } from '../entities/company-order.entity';

@Injectable()
export class CompanyOrderRepository {
  constructor(
    @Inject('COMPANY_ORDER_ENTITY')
    private readonly companyOrderEntity: typeof CompanyOrderEntity
  ) {}

  async create(
    order: Omit<CompanyOrderEntityInterface, 'id'>
  ): Promise<CompanyOrderEntityInterface> {
    return await this.companyOrderEntity.create(order);
  }

  async update(
    id: number,
    orderData: Partial<Omit<CompanyOrderEntityInterface, 'id'>>
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
