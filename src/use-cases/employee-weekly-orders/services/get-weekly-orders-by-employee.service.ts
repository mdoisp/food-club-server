import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrderResponse';
import { EmployeeWeeklyOrdersRepository } from '../repositories/employee-weekly-orders.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';
import { OrderItemRepository } from 'src/database/repositories/order-item.repository';
import { EmployeeWeeklyOrdersEntityInterface } from 'src/database/interfaces/employee-weekly-orders.interface';

@Injectable()
export class GetWeeklyOrdersByEmployeeService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_REPOSITORY')
    private readonly employeeWeeklyOrdersRepository: EmployeeWeeklyOrdersRepository,
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository,
    @Inject('ORDER_ITEM_REPOSITORY')
    private readonly orderItemRepository: OrderItemRepository,
  ) {}

  async execute(employeeId: number): Promise<EmployeeWeeklyOrderResponse[]> {
    const employee = await this.employeeRepository.getById(employeeId);
    if (!employee) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    const employeeWeeklyOrders = await this.employeeWeeklyOrdersRepository.findByEmployeeId(employeeId);
    let count = 0;
    const result: EmployeeWeeklyOrdersEntityInterface[] = [];
    for (const employeeWeeklyOrder of employeeWeeklyOrders) {
      count++;
      const orderItems = await this.orderItemRepository.findByPk(employeeWeeklyOrder.orderItemId);
      employeeWeeklyOrder.order = orderItems;
      result.push({
        id: employeeWeeklyOrder.id,
        employeeId: employeeWeeklyOrder.employeeId,
        dayOfWeek: employeeWeeklyOrder.dayOfWeek,
        orderItemId: employeeWeeklyOrder.orderItemId,
        order: orderItems,
        
      });
    }

     return result;
  }
} 