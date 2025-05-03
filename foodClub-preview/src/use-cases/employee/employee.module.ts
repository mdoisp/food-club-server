import { Module } from '@nestjs/common';

import { EmployeeController } from './employee.controller';
import { ListEmployeesService } from './services/list-Employees.service';
import { GetEmployeeByIdService } from './services/get-Employee-byid.service';
import { CreateEmployeeService } from './services/create-Employee.service';
import { UpdateEmployeeService } from './services/update-Employee.service';
import { DeleteEmployeeService } from './services/delete-Employee.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [ListEmployeesService, GetEmployeeByIdService, CreateEmployeeService, UpdateEmployeeService, DeleteEmployeeService],
})
export class EmployeeModule {}
