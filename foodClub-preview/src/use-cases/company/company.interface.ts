import { EmployeeInterface } from "../employee/employee.interface";

export interface CompanyInterface {
    id: string;
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    employees: EmployeeInterface[];
}