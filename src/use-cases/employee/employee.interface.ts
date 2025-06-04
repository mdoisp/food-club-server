import { IndividualOrderEntityInterface } from "src/database/interfaces/individual-order.interface";

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