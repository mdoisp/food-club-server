import { Inject, Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../../domain/models/employee.model';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository
  ) {}
  async execute(id: number, employeeData: EmployeeInterface): Promise<EmployeeInterface> {
    return await this.employeeRepository.update(id, employeeData);
  }
}