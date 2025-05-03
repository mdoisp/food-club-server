import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class DeleteEmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}
  execute(id: number): void {
    this.employeeRepository.delete(id);
  }
}