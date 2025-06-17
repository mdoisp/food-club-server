import { EmployeeWeeklyOrdersEntityInterface } from "src/domain/repositories/employee-weekly-orders.interface";
import { IndividualOrderEntityInterface } from "src/domain/repositories/individual-order.interface";

export interface EmployeeInterface {
    id: number;
    userId: number;
    companyId: number;
    name: string;
    cpf: string;
    birthDate: Date;
    individualOrders?: IndividualOrderEntityInterface[];
    // weeklyOrders?: EmployeeWeeklyOrdersEntityInterface[];
}