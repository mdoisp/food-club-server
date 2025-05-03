import { CompanyEntityInterface } from "src/database/interfaces/company.interface";

export interface EmployeeInterface {
    id: number;
    name: string;
    email: string;
    position: string;
    department: string;
    companyId: number;
    company?: CompanyEntityInterface;
}