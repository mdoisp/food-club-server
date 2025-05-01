/* eslint-disable prettier/prettier */
import { Dish } from '../../entities/dish.entity';
import { DishRepository } from '../../repositories/dish.repository';

export class CreateDishUseCase {
  constructor(private readonly dishRepository: DishRepository) {}

  async execute(dishData: Omit<Dish, 'id'> & { id?: string }): Promise<Dish> {
    const dish = new Dish({
      id: dishData.id || this.generateId(),
      name: dishData.name,
      description: dishData.description,
      price: dishData.price,
      category: dishData.category,
      image: dishData.image,
      ingredients: dishData.ingredients,
      restaurantId: dishData.restaurantId,
      isAvailable: dishData.isAvailable,
    });

    return this.dishRepository.create(dish);
  }

  private generateId(): string {
    return Date.now().toString();
  }
}
