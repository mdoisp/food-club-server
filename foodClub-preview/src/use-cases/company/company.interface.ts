import { EmployeeInterface } from "../employee/Employee.interface";

export interface CompanyInterface {
    IdEmpresa: number;
    NomeEmpresa: string;
    Rua?: string;
    CNPJ?: string;
    CEP?: string;
    Numero?: string;
    Cidade?: string;
    Estado?: string;
    phone: string;
    email: string;
    funcionario: EmployeeInterface[];
}
