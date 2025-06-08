import { Module } from '@nestjs/common';
import { EmployeeWeeklyOrdersController } from './employee-weekly-orders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { employeeWeeklyOrdersProvider } from 'src/database/providers/employee-weekly-orders.provider';
import { CreateOrUpdateWeeklyOrderService } from './services/create-or-update-weekly-order.service';
import { GetWeeklyOrdersByEmployeeService } from './services/get-weekly-orders-by-employee.service';
import { DeleteWeeklyOrderService } from './services/delete-weekly-order.service';
import { EmployeeWeeklyOrdersService } from './services/employee-weekly-orders.service';
import { employeeProvider } from 'src/database/providers/employee.provider';
import { individualOrderProvider } from 'src/database/providers/individual-order.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeWeeklyOrdersController],
  providers: [
    ...employeeWeeklyOrdersProvider,
    ...employeeProvider,
    ...individualOrderProvider, 
    CreateOrUpdateWeeklyOrderService,
    GetWeeklyOrdersByEmployeeService,
    DeleteWeeklyOrderService,
    EmployeeWeeklyOrdersService,
  ],
  exports: [
    CreateOrUpdateWeeklyOrderService,
    GetWeeklyOrdersByEmployeeService,
    DeleteWeeklyOrderService,
    EmployeeWeeklyOrdersService,
  ]
})
export class EmployeeWeeklyOrdersModule {} 