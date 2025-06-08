import { Inject, Injectable } from '@nestjs/common';
import { IndividualOrderEntity } from '../entities/individual-order.entity';
import { IndividualOrderEntityInterface } from '../interfaces/individual-order.interface';

@Injectable()
export class IndividualOrderRepository {
  constructor(
    @Inject('INDIVIDUAL_ORDER_ENTITY')
    private readonly individualOrderEntity: typeof IndividualOrderEntity,
  ) {}

  async create(order: Omit<IndividualOrderEntityInterface, 'id'>): Promise<IndividualOrderEntityInterface> {
    return await this.individualOrderEntity.create(order);
  }

  async getById(id: number): Promise<IndividualOrderEntityInterface | null> {
    return await this.individualOrderEntity.findByPk(id);
  }

  async listByCompanyOrder(companyOrderId: number): Promise<IndividualOrderEntityInterface[]> {
    return await this.individualOrderEntity.findAll({ where: { companyOrderId } });
  }

  async listByEmployee(employeeId: number): Promise<IndividualOrderEntityInterface[]> {
    return await this.individualOrderEntity.findAll({ where: { employeeId } });
  }

  async delete(id: number): Promise<void> {
    const order = await this.individualOrderEntity.findByPk(id);
    await order.destroy();
  }
}