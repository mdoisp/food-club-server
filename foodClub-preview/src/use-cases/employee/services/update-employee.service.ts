import { Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../employee.interface';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}
  execute(id: number, employeeData: EmployeeInterface): Promise<EmployeeInterface> {
    return this.employeeRepository.update(id, employeeData);
  }
}