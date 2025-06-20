import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../../domain/models/dish.interface';
import { DishRepository } from '../../infrastructure/database/repositories/dish.repository';
import { DishRatingRepository } from '../../infrastructure/database/repositories/dish-rating.repository';
import { ListDishRatingDtoResponse } from '../../interfaces/http/dtos/response/listDishRatingDtoResponse';
import { DishRatingEntityInterface } from '../../domain/repositories/dish-rating.interface';

@Injectable()
export class ListDishesByRestaurantService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository,
    @Inject('DISH_RATING_REPOSITORY')
    private readonly dishRatingRepository: DishRatingRepository
  ) {}

  async execute(restaurantId: number): Promise<ListDishRatingDtoResponse[]> {
    const dishes = await this.dishRepository.listByRestaurant(restaurantId);
    const dishesWithRatings = await Promise.all(
      dishes.map(async (dish) => {
        const ratings = await this.dishRatingRepository.listByDish(dish.id);
        return {
          restaurantId: dish.restaurantId,
          name: dish.name,
          description: dish.description,
          price: dish.price,
          image: dish.image,
          ratings: ratings as DishRatingEntityInterface[],
          averageRating: ratings.length > 0 ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length : 0
        };
      })
    );
    return dishesWithRatings;
  }
} 