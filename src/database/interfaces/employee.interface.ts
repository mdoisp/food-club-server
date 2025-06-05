import { IndividualOrderEntityInterface } from './individual-order.interface';

export interface EmployeeEntityInterface {
  id: number;
  userId: number;
  companyId: number;
  name: string;
  cpf: string;
  birthDate: Date;
  individualOrders?: IndividualOrderEntityInterface[];
  // weeklyOrders?: EmployeeWeeklyOrdersEntityInterface[];
}
