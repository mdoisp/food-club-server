import { UserEntityInterface } from "./user.interface";

export interface RestaurantRatingEntityInterface {
  id: number;
  restaurantId: number;
  userId: number;
  rating: number;
  description: string;
  user?: UserEntityInterface;
} 