import { Dish } from '../../entities/dish.entity';
import { DishRepository } from '../../repositories/dish.repository';

export class GetDishUseCase {
  constructor(private readonly dishRepository: DishRepository) {}

  async execute(id: string): Promise<Dish | null> {
    return this.dishRepository.findById(id);
  }
}