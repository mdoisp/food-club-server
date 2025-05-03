import { EmployeeEntityInterface } from "./employee.interface";

export interface CompanyEntityInterface {
    idEmpresa: number;
    nomeEmpresa: string;
    rua?: string;
    cnpj?: string;
    cep?: string;
    numero?: string;
    cidade?: string;
    estado?: string;
    fone: string;
    email: string;
    funcionarios?: EmployeeEntityInterface[];
  }