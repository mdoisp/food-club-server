import { Inject, Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../../use-cases/employee/employee.interface';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';

@Injectable()
export class EmployeeRepository {
  private employees: EmployeeInterface[] = [];

  constructor(
    @Inject('EMPLOYEE_ENTITY')
    private employeeEntity: typeof EmployeeEntity,
  ) {}

  create(employee: EmployeeInterface): void {
    this.employees.push(employee);
  }

  update(id: number, employeeData: EmployeeInterface): EmployeeInterface {
    const index = this.employees.findIndex((employee) => employee.idFuncionario === id);
    if (index === -1) throw new Error('Funcionário não encontrado!');

    const updatedEmployee = { ...employeeData, id: this.employees[index].idFuncionario };
    this.employees[index] = updatedEmployee;
    return updatedEmployee;
  }

  getById(id: number): EmployeeInterface {
    const employee = this.employees.find((employee) => employee.idFuncionario === id);
    if (!employee) throw new Error('Funcionário não encontrado!');
    return employee;
  }

  async list(): Promise<EmployeeEntityInterface[]> {
    return await this.employeeEntity.findAll();
  }

  delete(id: number): void {
    const index = this.employees.findIndex((employee) => employee.idFuncionario === id);
    if (index === -1) throw new Error('Funcionário não encontrado!');
    this.employees.splice(index, 1);
  }
}