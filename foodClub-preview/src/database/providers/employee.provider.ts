import { EmployeeEntity } from "../entities/Employee.entity";

export const employeeProvider = [{
    provide: 'EMPLOYEE_ENTITY',
    useValue: EmployeeEntity
}]