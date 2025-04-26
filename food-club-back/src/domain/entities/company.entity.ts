import { Employee } from './employee.entity';

export class Company {
  id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  employees: Employee[];

  constructor(params: {
    id: string;
    name: string;
    description?: string;
    address: string;
    phone: string;
    email: string;
    logo?: string;
    employees?: Employee[];
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.address = params.address;
    this.phone = params.phone;
    this.email = params.email;
    this.logo = params.logo;
    this.employees = params.employees || [];
  }
}
