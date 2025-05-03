import { Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../employee.interface';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class GetEmployeeByIdService {
  constructor(private employeeRepository: EmployeeRepository){}
  execute(id: number): EmployeeInterface {
    return this.employeeRepository.getById(id);
  }
}
