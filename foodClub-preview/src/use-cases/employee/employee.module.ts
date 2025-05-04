import { Module } from '@nestjs/common';

import { EmployeeController } from './employee.controller';
import { ListEmployeesService } from './services/list-employees.service';
import { GetEmployeeByIdService } from './services/get-Employee-byid.service';
import { CreateEmployeeService } from './services/create-Employee.service';
import { UpdateEmployeeService } from './services/update-Employee.service';
import { DeleteEmployeeService } from './services/delete-Employee.service';
import { DatabaseModule } from 'src/database/database.module';
import { employeeProviders } from 'src/database/providers/employee.provider';
import { EmployeeRepository } from '../../database/repositories/employee.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProviders, // Deve vir primeiro
    EmployeeRepository, // Opcional, já está nos providers
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