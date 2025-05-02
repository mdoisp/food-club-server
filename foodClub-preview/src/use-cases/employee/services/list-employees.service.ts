import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from 'src/database/repositories/Employee.repository';
import { EmployeeEntityInterface } from 'src/database/entities/Employee.interface';

@Injectable()
export class ListEmployeesService {
  constructor(private EmployeeRepository: EmployeeRepository) {}
  execute(): Promise<EmployeeEntityInterface[]>{
    return this.EmployeeRepository.list();
  }
}
