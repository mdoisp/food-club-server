import { Dish } from '../entities/dish.entity';

export interface DishRepository {
  findAll(restaurantId?: string): Promise<Dish[]>;
  findById(id: string): Promise<Dish | null>;
  create(dish: Dish): Promise<Dish>;
  update(id: string, dish: Partial<Dish>): Promise<Dish | null>;
  delete(id: string): Promise<boolean>;
}