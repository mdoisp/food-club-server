import { DishEntityInterface } from './dish.interface';

export interface RestaurantEntityInterface {
  id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  companyId: string;
  dishes?: DishEntityInterface[];
}