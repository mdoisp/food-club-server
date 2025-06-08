import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrdersEntity } from '../../../database/entities/employee-weekly-orders.entity';

@Injectable()
export class DeleteWeeklyOrderService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_ENTITY')
    private readonly employeeWeeklyOrdersEntity: typeof EmployeeWeeklyOrdersEntity,
  ) {}

  async execute(id: number): Promise<void> {
    const order = await this.employeeWeeklyOrdersEntity.findByPk(id);
    if (!order) {
      throw new NotFoundException('Pedido semanal não encontrado');
    }
    await order.destroy();
  }
} 