import { Restaurant } from '../entities/restaurant.entity';

export interface RestaurantRepository {
  findAll(): Promise<Restaurant[]>;
  findById(id: string): Promise<Restaurant | null>;
  create(restaurant: Restaurant): Promise<Restaurant>;
  update(
    id: string,
    restaurant: Partial<Restaurant>,
  ): Promise<Restaurant | null>;
  delete(id: string): Promise<boolean>;
}
