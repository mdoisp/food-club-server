import { CompanyAffiliateRestaurantEntityInterface } from "./company-affiliate-restaurant.interface";
import { EmployeeEntityInterface } from "./employee.interface";

export interface CompanyEntityInterface {
  id: number;
  userId: number;
  name: string;
  cnpj: string;
  cep: string;
  number: string;
  employees?: EmployeeEntityInterface[];
  affiliateRestaurants?: CompanyAffiliateRestaurantEntityInterface[];
}