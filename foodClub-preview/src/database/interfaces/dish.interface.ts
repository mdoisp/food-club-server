import { DishRatingEntityInterface } from "./dish-rating.interface";
import { OrderItemEntityInterface } from "./order-item.interface";

export interface DishEntityInterface {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  ratings?: DishRatingEntityInterface[];
  orderItems?: OrderItemEntityInterface[];
}