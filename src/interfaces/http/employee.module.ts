import { Module } from '@nestjs/common';

import { EmployeeController } from './controllers/employee.controller';
import { ListEmployeesService } from '../../application/use-cases/list-employees.use-cases';
import { GetEmployeeByIdService } from '../../application/use-cases/get-employee-byid.use-cases';
import { CreateEmployeeService } from '../../application/use-cases/create-employee.use-cases';
import { UpdateEmployeeService } from '../../application/use-cases/update-employee.use-cases';
import { DeleteEmployeeService } from '../../application/use-cases/delete-employee.use-cases';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { employeeProvider } from 'src/infrastructure/providers/employee.provider';
import { EmployeeRepository } from '../../infrastructure/database/repositories/employee.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProvider,
    EmployeeRepository, 
    ListEmployeesService,
    GetEmployeeByIdService,
    CreateEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
  ],
  exports: [
    ListEmployeesService,
    GetEmployeeByIdService,
    CreateEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
  ]
})
export class EmployeeModule {}