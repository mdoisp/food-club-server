import { DishRatingEntityInterface } from 'src/database/interfaces/dish-rating.interface';
import { OrderItemEntityInterface } from 'src/database/interfaces/order-item.interface';

export interface DishInterface {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  ratings?: DishRatingEntityInterface[];
  orderItems?: OrderItemEntityInterface[];
}
