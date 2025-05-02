import { Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../Employee.interface';
import { EmployeeRepository } from 'src/database/repositories/Employee.repository';

@Injectable()
export class GetEmployeeByIdService {
  constructor(private employeeRepository: EmployeeRepository){}
  execute(id: number): EmployeeInterface {
    return this.employeeRepository.getById(id);
  }
}
