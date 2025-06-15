import { CompanyAffiliateRestaurantEntityInterface } from "src/domain/repositories/company-affiliate-restaurant.interface";
import { EmployeeEntityInterface } from "src/domain/repositories/employee.interface";

export interface CompanyInterface {
  id: number;
  userId: number;
  name: string;
  cnpj: string;
  cep: string;
  number: string;
  employees?: EmployeeEntityInterface[];
  affiliateRestaurants?: CompanyAffiliateRestaurantEntityInterface[];
}
