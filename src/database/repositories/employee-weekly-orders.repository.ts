import { Inject, Injectable } from '@nestjs/common';
import { EmployeeWeeklyOrdersEntity } from '../entities/employee-weekly-orders.entity';
import { EmployeeWeeklyOrdersEntityInterface } from '../interfaces/employee-weekly-orders.interface';

@Injectable()
export class EmployeeWeeklyOrdersRepository {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_ENTITY')
    private readonly weeklyOrdersEntity: typeof EmployeeWeeklyOrdersEntity
  ) {}

  async createOrUpdate(
    employeeId: number,
    dayOfWeek: string,
    orderId: number | null
  ): Promise<EmployeeWeeklyOrdersEntityInterface> {
    const [order, created] = await this.weeklyOrdersEntity.findOrCreate({
      where: { employeeId, dayOfWeek },
      defaults: { individualOrderId: orderId },
    });

    if (!created) {
      return await order.update({ individualOrderId: orderId });
    }

    return order;
  }

  async getByEmployeeAndDay(
    employeeId: number,
    dayOfWeek: string
  ): Promise<EmployeeWeeklyOrdersEntityInterface | null> {
    return await this.weeklyOrdersEntity.findOne({ where: { employeeId, dayOfWeek } });
  }

  async listByEmployee(employeeId: number): Promise<EmployeeWeeklyOrdersEntityInterface[]> {
    return await this.weeklyOrdersEntity.findAll({ where: { employeeId } });
  }

  async clearDay(employeeId: number, dayOfWeek: string): Promise<void> {
    await this.weeklyOrdersEntity.destroy({ where: { employeeId, dayOfWeek } });
  }
}
