import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrdersRepository } from '../repositories/employee-weekly-orders.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';
import { IndividualOrderRepository } from 'src/database/repositories/individual-order.repository';
import { EmployeeWeeklyOrdersEntityInterface } from 'src/database/interfaces/employee-weekly-orders.interface';
import { OrderItemEntityInterface } from 'src/database/interfaces/order-item.interface';
import { OrderItemRepository } from 'src/database/repositories/order-item.repository';

@Injectable()
export class CreateOrUpdateWeeklyOrderService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_REPOSITORY')
    private readonly employeeWeeklyOrdersRepository: EmployeeWeeklyOrdersRepository,
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository,
    @Inject('ORDER_ITEM_REPOSITORY')
    private readonly orderItemRepository: OrderItemRepository,
  ) {}

  async execute(employeeWeeklyOrder: EmployeeWeeklyOrdersEntityInterface): Promise<EmployeeWeeklyOrdersEntityInterface> {
    const employee = await this.employeeRepository.getById(employeeWeeklyOrder.employeeId);
    if (!employee) {
        throw new NotFoundException('Funcionário não encontrado');
    }
    
    const individualOrder = {
      employeeId: employeeWeeklyOrder.employeeId,
      dayOfWeek: employeeWeeklyOrder.dayOfWeek,
      orderItemId: employeeWeeklyOrder.order.id,
    }

    const existingOrder = await this.employeeWeeklyOrdersRepository.findByEmployeeAndDay(employeeWeeklyOrder.employeeId,employeeWeeklyOrder.dayOfWeek);

    if (existingOrder) {
      const orderItems = await this.orderItemRepository.create(employeeWeeklyOrder.order);
      individualOrder.orderItemId = orderItems.id;
      const updatedWeeklyOrder = await this.employeeWeeklyOrdersRepository.update(existingOrder.id, individualOrder);

      if (!updatedWeeklyOrder) {
        throw new NotFoundException('Erro ao atualizar pedido semanal');
      }
      return updatedWeeklyOrder;
    }else{
      const orderItems = await this.orderItemRepository.create(employeeWeeklyOrder.order);
      individualOrder.orderItemId = orderItems.id;      
    const newOrder = await this.employeeWeeklyOrdersRepository.create(individualOrder);
    if (!newOrder) {
      throw new NotFoundException('Erro ao criar pedido semanal');
    }

    return newOrder;
    }
  }
} 