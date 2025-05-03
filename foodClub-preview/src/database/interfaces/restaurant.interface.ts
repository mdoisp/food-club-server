import { DishEntityInterface } from './dish.interface';

export interface RestaurantEntityInterface {
  idRestaurante: number;
  name: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  dishes?: DishEntityInterface[];
}