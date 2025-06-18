import { CompanyEntityInterface } from "src/domain/repositories/company.interface";
import { EmployeeEntityInterface } from "src/domain/repositories/employee.interface";
import { RestaurantEntityInterface } from "src/domain/repositories/restaurant.interface";


export enum UserType {
  COMPANY = 'company',
  EMPLOYEE = 'employee',
  RESTAURANT = 'restaurant',
}

export interface UserInterface {
  id: number;
  email: string;
  password: string;
  userType: UserType;
  verificationToken?: string;
  verificationTokenExpireAt?: Date;
  cpf?: string;
  cnpj?: string;
  company?: CompanyEntityInterface;
  employee?: EmployeeEntityInterface;
  restaurant?: RestaurantEntityInterface;
}