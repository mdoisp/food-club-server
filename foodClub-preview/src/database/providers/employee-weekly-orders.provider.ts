import { EmployeeWeeklyOrdersEntity } from "../entities/employee-weekly-orders.entity";
import { EmployeeWeeklyOrdersRepository } from '../repositories/employee-weekly-orders.repository';

export const employeeWeeklyOrdersProvider = [
  {
    provide: 'EMPLOYEE_WEEKLY_ORDERS_ENTITY',
    useValue: EmployeeWeeklyOrdersEntity,
  },
  {
    provide: 'EMPLOYEE_WEEKLY_ORDERS_REPOSITORY',
    useClass: EmployeeWeeklyOrdersRepository,
  },
];