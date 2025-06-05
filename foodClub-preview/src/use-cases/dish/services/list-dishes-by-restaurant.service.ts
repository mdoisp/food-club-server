import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';
import { DishRatingRepository } from '../../../database/repositories/dish-rating.repository';

@Injectable()
export class ListDishesByRestaurantService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository,
    @Inject('DISH_RATING_REPOSITORY')
    private readonly dishRatingRepository: DishRatingRepository
  ) {}

  async execute(restaurantId: number): Promise<DishInterface[]> {
    const dishes = await this.dishRepository.listByRestaurant(restaurantId);
    const dishesWithRatings = await Promise.all(
      dishes.map(async (dish) => {
        const ratings = await this.dishRatingRepository.listByDish(dish.id);
        return { ...dish, ratings };
      })
    );
    return dishesWithRatings;
  }
} 