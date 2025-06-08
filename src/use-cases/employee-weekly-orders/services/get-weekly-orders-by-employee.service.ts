import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrderResponse';
import { EmployeeWeeklyOrdersRepository } from '../repositories/employee-weekly-orders.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class GetWeeklyOrdersByEmployeeService {
  constructor(
    @Inject('EMPLOYEE_WEEKLY_ORDERS_REPOSITORY')
    private readonly employeeWeeklyOrdersRepository: EmployeeWeeklyOrdersRepository,
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(employeeId: number): Promise<EmployeeWeeklyOrderResponse[]> {
    const employee = await this.employeeRepository.getById(employeeId);
    if (!employee) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    return await this.employeeWeeklyOrdersRepository.findByEmployeeId(employeeId);
  }
} 