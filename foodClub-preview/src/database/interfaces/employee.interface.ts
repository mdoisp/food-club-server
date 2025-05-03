import { CompanyEntityInterface } from './company.interface';

export interface EmployeeEntityInterface {
  idFuncionario: number;
  name: string;
  email: string;
  position: string;
  department: string;
  companyId: number;
  company?: CompanyEntityInterface;
}