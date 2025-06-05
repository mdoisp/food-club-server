import { DishEntityInterface } from './dish.interface';
import { CompanyOrderEntityInterface } from './company-order.interface';

export interface RestaurantEntityInterface {
  id: number;
  userId: number;
  name: string;
  cnpj: string;
  cep: string;
  number: string;
  dishes?: DishEntityInterface[];
  companyOrders?: CompanyOrderEntityInterface[];
}
