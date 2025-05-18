import { Inject, Injectable } from '@nestjs/common';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';

@Injectable()
export class EmployeeRepository {
  constructor(
    @Inject('EMPLOYEE_ENTITY')
    private readonly employeeEntity: typeof EmployeeEntity,
  ) {}

  async create(employee: Omit<EmployeeEntityInterface, 'id'>): Promise<EmployeeEntityInterface> {
    return await this.employeeEntity.create(employee);
  }

  async update(
    id: number,
    employeeData: Partial<Omit<EmployeeEntityInterface, 'id'>>,
  ): Promise<EmployeeEntityInterface> {
    const employee = await this.employeeEntity.findByPk(id);
    if (!employee) throw new Error('Funcionário não encontrado!');
    return await employee.update(employeeData);
  }

  async getById(id: number): Promise<EmployeeEntityInterface> {
    const employee = await this.employeeEntity.findByPk(id);
    if (!employee) throw new Error('Funcionário não encontrado!');
    return employee;
  }

  async list(): Promise<EmployeeEntityInterface[]> {
    return await this.employeeEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const employee = await this.employeeEntity.findByPk(id);
    if (!employee) throw new Error('Funcionário não encontrado!');
    await employee.destroy();
  }
}

// import { Inject, Injectable } from '@nestjs/common';
// import { EmployeeEntity } from '../entities/employee.entity';
// import { EmployeeEntityInterface } from '../interfaces/employee.interface';
// import { EmployeeInterface } from '../../use-cases/employee/employee.interface';

// @Injectable()
// export class EmployeeRepository {
//   constructor(
//     @Inject('EMPLOYEE_ENTITY')
//     private readonly employeeEntity: typeof EmployeeEntity,
//   ) {}

//   async create(employee: Omit<EmployeeInterface, 'idFuncionario'>): Promise<EmployeeEntityInterface> {
//     return await this.employeeEntity.create(employee);
//   }

//   async update(
//     id: number,
//     employeeData: Partial<Omit<EmployeeInterface, 'idFuncionario'>>,
//   ): Promise<EmployeeEntityInterface> {
//     const employee = await this.employeeEntity.findByPk(id);
//     if (!employee) throw new Error('Funcionário não encontrado!');
    
//     return await employee.update(employeeData);
//   }

//   async getById(id: number): Promise<EmployeeEntityInterface> {
//     const employee = await this.employeeEntity.findByPk(id);
//     if (!employee) throw new Error('Funcionário não encontrado!');
//     return employee;
//   }

//   async list(): Promise<EmployeeEntityInterface[]> {
//     return await this.employeeEntity.findAll();
//   }

//   async delete(id: number): Promise<void> {
//     const employee = await this.employeeEntity.findByPk(id);
//     if (!employee) throw new Error('Funcionário não encontrado!');
//     await employee.destroy();
//   }
// }