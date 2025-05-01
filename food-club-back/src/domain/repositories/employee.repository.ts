import { Employee } from '../entities/employee.entity';

export interface EmployeeRepository {
  findAll(companyId?: string): Promise<Employee[]>;
  findById(id: string): Promise<Employee | null>;
  create(employee: Employee): Promise<Employee>;
  update(id: string, employee: Partial<Employee>): Promise<Employee | null>;
  delete(id: string): Promise<boolean>;
}