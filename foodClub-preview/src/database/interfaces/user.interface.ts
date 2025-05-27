import { CompanyEntityInterface } from "./company.interface";
import { EmployeeEntityInterface } from "./employee.interface";
import { RestaurantEntityInterface } from "./restaurant.interface";

export interface UserEntityInterface {
  id: number;
  email: string;
  password: string;
  userType: 'company' | 'employee' | 'restaurant';
  verificationToken?: string;
  verificationTokenExpireAt?: Date;
  company?: CompanyEntityInterface;
  employee?: EmployeeEntityInterface;
  restaurant?: RestaurantEntityInterface;
}