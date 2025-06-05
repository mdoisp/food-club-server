import { CompanyEntityInterface } from './company.interface';
import { EmployeeEntityInterface } from './employee.interface';
import { RestaurantEntityInterface } from './restaurant.interface';

export enum UserType {
  COMPANY = 'company',
  EMPLOYEE = 'employee',
  RESTAURANT = 'restaurant',
}

export interface UserEntityInterface {
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
