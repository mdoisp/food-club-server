import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrdersEntity } from '../../../database/entities/employee-weekly-orders.entity';
import { IndividualOrderEntity } from '../../../database/entities/individual-order.entity';
import { EmployeeEntity } from '../../../database/entities/employee.entity';
import { CreateEmployeeWeeklyOrderDto } from 'src/interfaces/http/dtos/request/createEmployeeWeeklyOrderDto';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrderResponse';

@Injectable()
export class EmployeeWeeklyOrdersService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_ENTITY')
    private readonly employeeWeeklyOrdersEntity: typeof EmployeeWeeklyOrdersEntity,
    @Inject('INDIVIDUAL_ORDER_ENTITY')
    private readonly individualOrderEntity: typeof IndividualOrderEntity,
    @Inject('EMPLOYEE_ENTITY')
    private readonly employeeEntity: typeof EmployeeEntity,
  ) {}

  // async createOrUpdateWeeklyOrder(dto: CreateEmployeeWeeklyOrderDto): Promise<EmployeeWeeklyOrderResponse> {
  //   // Verificar se o funcionário existe
  //   const employee = await this.employeeEntity.findByPk(dto.employeeId);
  //   if (!employee) {
  //     throw new NotFoundException('Funcionário não encontrado');
  //   }

  //   // Verificar se o pedido individual existe
  //   const individualOrder = await this.individualOrderEntity.findByPk(dto.individualOrderId);
  //   if (!individualOrder) {
  //     throw new NotFoundException('Pedido individual não encontrado');
  //   }

  //   // Verificar se já existe um pedido para este dia
  //   const existingOrder = await this.employeeWeeklyOrdersEntity.findOne({
  //     where: {
  //       employeeId: dto.employeeId,
  //       dayOfWeek: dto.dayOfWeek,
  //     },
  //   });

  //   if (existingOrder) {
  //     // Atualizar pedido existente
  //     await existingOrder.update({
  //       individualOrderId: dto.individualOrderId,
  //     });
  //     return existingOrder;
  //   }

  //   // Criar novo pedido
  //   const newOrder = await this.employeeWeeklyOrdersEntity.create({
  //     employeeId: dto.employeeId,
  //     dayOfWeek: dto.dayOfWeek,
  //     individualOrderId: dto.individualOrderId,
  //   });

  //   return newOrder;
  // }

  // async getWeeklyOrdersByEmployee(employeeId: number): Promise<EmployeeWeeklyOrderResponse[]> {
  //   const employee = await this.employeeEntity.findByPk(employeeId);
  //   if (!employee) {
  //     throw new NotFoundException('Funcionário não encontrado');
  //   }

  //   return await this.employeeWeeklyOrdersEntity.findAll({
  //     where: { employeeId },
  //     include: [
  //       { model: IndividualOrderEntity, as: 'individualOrder' },
  //       { model: EmployeeEntity, as: 'employee' },
  //     ],
  //   });
  // }

  async deleteWeeklyOrder(id: number): Promise<void> {
    const order = await this.employeeWeeklyOrdersEntity.findByPk(id);
    if (!order) {
      throw new NotFoundException('Pedido semanal não encontrado');
    }
    await order.destroy();
  }
} 