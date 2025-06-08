import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrdersRepository } from '../repositories/employee-weekly-orders.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';
import { IndividualOrderRepository } from 'src/database/repositories/individual-order.repository';
import { EmployeeWeeklyOrdersEntityInterface } from 'src/database/interfaces/employee-weekly-orders.interface';
import { OrderItemEntityInterface } from 'src/database/interfaces/order-item.interface';

@Injectable()
export class CreateOrUpdateWeeklyOrderService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_REPOSITORY')
    private readonly employeeWeeklyOrdersRepository: EmployeeWeeklyOrdersRepository,
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository,
    @Inject('INDIVIDUAL_ORDER_REPOSITORY')
    private readonly individualOrderRepository: IndividualOrderRepository,
  ) {}

  async execute(employeeWeeklyOrder: EmployeeWeeklyOrdersEntityInterface): Promise<EmployeeWeeklyOrdersEntityInterface> {
    const employee = await this.employeeRepository.getById(employeeWeeklyOrder.employeeId);
    if (!employee) {
        throw new NotFoundException('Funcionário não encontrado');
    }
    
    // console.log('employeeWeeklyOrder', {
    //   employeeId: employeeWeeklyOrder.employeeId,
    //   companyOrderId: employee,
    // });
    //     const individualOrder = await this.individualOrderRepository.create({
    //         employeeId: employeeWeeklyOrder.employeeId,
    //         companyOrderId: employee.companyId,
    //     });
    //     if (!individualOrder) {
    //         throw new NotFoundException('Erro ao criar pedido semanal');
    //     }
    
    const individualOrder = {
      employeeId: employeeWeeklyOrder.employeeId,
      dayOfWeek: employeeWeeklyOrder.dayOfWeek,
      order: employeeWeeklyOrder.order,
    }
    console.log('individualOrder', individualOrder);
    const existingOrder = await this.employeeWeeklyOrdersRepository.findByEmployeeAndDay(employeeWeeklyOrder.employeeId,employeeWeeklyOrder.dayOfWeek);
    console.log('existingOrder2', existingOrder);
    if (existingOrder) {
      const updatedOrder = await this.employeeWeeklyOrdersRepository.update(existingOrder.id, individualOrder);
      if (!updatedOrder) {
        throw new NotFoundException('Erro ao atualizar pedido semanal');
      }
      return updatedOrder;
    }else{

    const newOrder = await this.employeeWeeklyOrdersRepository.create(individualOrder);
    if (!newOrder) {
      throw new NotFoundException('Erro ao criar pedido semanal');
    }

    return newOrder;
    }
  }
} 