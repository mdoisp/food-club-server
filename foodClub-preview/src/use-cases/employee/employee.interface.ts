import { CompanyEntityInterface } from "src/database/interfaces/company.interface";

export interface EmployeeInterface {
    idFuncionario: number;
    name: string;
    email: string;
    position: string;
    department: string;
    companyId: number;
    company?: CompanyEntityInterface;
}