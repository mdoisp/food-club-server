import { Inject, Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../domain/models/restaurant.interface';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { DishRepository } from 'src/infrastructure/database/repositories/dish.repository';
import { RestaurantRatingRepository } from 'src/infrastructure/database/repositories/restaurant-rating.repository';

@Injectable()
export class GetRestaurantByIdService {
  constructor(
    private restaurantRepository: RestaurantRepository,
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository,
    @Inject('RESTAURANT_RATING_REPOSITORY')
    private readonly restaurantRatingRepository: RestaurantRatingRepository
  ){}
  async execute(id: number): Promise<RestaurantInterface> {
    const restaurant = await this.restaurantRepository.getById(id);
    const dishes = await this.dishRepository.listByRestaurant(id)
    const restaurantRatings = await this.restaurantRatingRepository.listByRestaurant(id)   
    
    const averageRating = restaurantRatings.length > 0 ? restaurantRatings.reduce((sum, rating) => sum + rating.rating, 0) / restaurantRatings.length : 0

    const restaurantWithDishes = {
      id: restaurant.id,
      userId: restaurant.userId,
      name: restaurant.name,
      cnpj: restaurant.cnpj,
      cep: restaurant.cep,
      number: restaurant.number,
      image: restaurant.image,
      dishes: dishes,
      restaurantRatings: restaurantRatings,
      averageRating: averageRating
    }
    return restaurantWithDishes;
  }
}
