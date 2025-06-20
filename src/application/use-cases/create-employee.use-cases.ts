import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { EmployeeInterface } from "../../domain/models/employee.model";
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private readonly employeeRepository: EmployeeRepository){}
    async execute(employee: EmployeeInterface): Promise<void> {
        const validate = await this.validateUserCreateEmployee(employee);
        if(!validate){
            throw new BadRequestException('CPF já cadastrado');
        }
        this.employeeRepository.create(employee);
    }

    async validateUserCreateEmployee(employee: EmployeeInterface): Promise<boolean> {
        console.log('employee',employee);
        const employees = await this.employeeRepository.list();
        console.log('employees',employees);
        const existingEmployee = employees.find(e => e.cpf === employee.cpf);
        if(existingEmployee){
            return false;
        }
        return true;
    }
}