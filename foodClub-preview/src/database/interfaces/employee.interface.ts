import { CompanyEntityInterface } from './company.interface';

export interface EmployeeEntityInterface {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  companyId: number;
  company?: CompanyEntityInterface;
}