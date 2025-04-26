import { Dish } from '../../entities/dish.entity';
import { DishRepository } from '../../repositories/dish.repository';

export class GetAllDishesUseCase {
  constructor(private readonly dishRepository: DishRepository) {}

  async execute(restaurantId?: string): Promise<Dish[]> {
    return this.dishRepository.findAll(restaurantId);
  }
}