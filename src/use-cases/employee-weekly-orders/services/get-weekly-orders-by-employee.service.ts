import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrdersEntity } from '../../../database/entities/employee-weekly-orders.entity';
import { IndividualOrderEntity } from '../../../database/entities/individual-order.entity';
import { EmployeeEntity } from '../../../database/entities/employee.entity';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrderResponse';

@Injectable()
export class GetWeeklyOrdersByEmployeeService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_ENTITY')
    private readonly employeeWeeklyOrdersEntity: typeof EmployeeWeeklyOrdersEntity,
    @Inject('EMPLOYEE_ENTITY')
    private readonly employeeEntity: typeof EmployeeEntity,
  ) {}

  async execute(employeeId: number): Promise<EmployeeWeeklyOrderResponse[]> {
    const employee = await this.employeeEntity.findByPk(employeeId);
    if (!employee) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    return await this.employeeWeeklyOrdersEntity.findAll({
      where: { employeeId },
      include: [
        { model: IndividualOrderEntity, as: 'individualOrder' },
        { model: EmployeeEntity, as: 'employee' },
      ],
    });
  }
} 