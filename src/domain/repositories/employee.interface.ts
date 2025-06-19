import { EmployeeWeeklyOrdersEntityInterface } from "./employee-weekly-orders.interface";
import { IndividualOrderEntityInterface } from "./individual-order.interface";

export interface EmployeeEntityInterface {
  id: number;
  userId: number;
  companyId: number;
  name: string;
  cpf: string;
  birthDate: Date;
  vacation: boolean;
  individualOrders?: IndividualOrderEntityInterface[];
  // weeklyOrders?: EmployeeWeeklyOrdersEntityInterface[];
}