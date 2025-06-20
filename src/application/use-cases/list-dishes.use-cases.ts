import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../../domain/models/dish.model';
import { DishRepository } from '../../infrastructure/database/repositories/dish.repository';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class ListDishesService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository,
    @Inject('RESTAURANT_REPOSITORY')
    private readonly restaurantRepository: RestaurantRepository
  ) {}
  async execute(): Promise<DishInterface[]>{
    const dishes = await this.dishRepository.list(); 
    const dishesWithRestaurantNames = await Promise.all(dishes.map(async dish => {
      const restaurant = await this.restaurantRepository.getById(dish.restaurantId);
      if (!restaurant) return null;
      return {
        id: dish.id,
        restaurantId: dish.restaurantId,
        name: dish.name,
        description: dish.description,
        price: dish.price,
        image: dish.image,
        ratings: dish.ratings,
        restaurantName: restaurant.name,
      };
    }));
    return dishesWithRestaurantNames;
  }
}
