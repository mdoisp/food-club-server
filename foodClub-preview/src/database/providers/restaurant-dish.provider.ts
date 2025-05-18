import { RestaurantDishEntity } from "../entities/restaurant-dish.entity";
import { RestaurantDishRepository } from '../repositories/restaurant-dish.repository';

export const restaurantDishProvider = [
  {
    provide: 'RESTAURANT_DISH_ENTITY',
    useValue: RestaurantDishEntity,
  },
  {
    provide: 'RESTAURANT_DISH_REPOSITORY',
    useClass: RestaurantDishRepository,
  },
];