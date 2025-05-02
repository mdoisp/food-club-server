import { Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../Employee.interface';
import { EmployeeRepository } from 'src/database/repositories/Employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}
  execute(id: number, employeeData: EmployeeInterface): EmployeeInterface {
    return this.employeeRepository.update(id, employeeData);
  }
}