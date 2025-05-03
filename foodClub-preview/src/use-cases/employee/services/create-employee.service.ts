import { Injectable } from "@nestjs/common";
import { EmployeeInterface } from "../employee.interface";
import { EmployeeRepository } from 'src/database/repositories/Employee.repository';

@Injectable()
export class CreateEmployeeService {
    constructor(private employeeRepository: EmployeeRepository){}
    execute(employee: EmployeeInterface): void {
        this.employeeRepository.create(employee);
    }
}