import { DishRatingEntityInterface } from 'src/domain/repositories/dish-rating.interface';
import { OrderItemEntityInterface } from 'src/domain/repositories/order-item.interface';

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