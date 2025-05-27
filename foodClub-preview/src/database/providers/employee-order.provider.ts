import { EmployeeOrderEntity } from "../entities/employee-weekly-orders.entity";
import { EmployeeOrderRepository } from '../repositories/employee-order.repository';

export const employeeOrderProvider = [
  {
    provide: 'EMPLOYEE_ORDER_ENTITY',
    useValue: EmployeeOrderEntity,
  },
  {
    provide: 'EMPLOYEE_ORDER_REPOSITORY',
    useClass: EmployeeOrderRepository,
  },
];