import { CompanyEntityInterface } from "src/database/interfaces/company.interface";
import { EmployeeEntityInterface } from "src/database/interfaces/employee.interface";
import { RestaurantEntityInterface } from "src/database/interfaces/restaurant.interface";


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
  company?: CompanyEntityInterface;
  employee?: EmployeeEntityInterface;
  restaurant?: RestaurantEntityInterface;
}