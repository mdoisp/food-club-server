import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { EmployeeInterface } from "../../domain/models/employee.interface";
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private readonly employeeRepository: EmployeeRepository){}
    async execute(employee: EmployeeInterface): Promise<void> {
        const employees = await this.employeeRepository.list();
            const existingEmployee = employees.find(e => e.cpf === employee.cpf);
            if(existingEmployee){
                throw new BadRequestException('CPF já cadastrado');
            }
        this.employeeRepository.create(employee);
    }
}