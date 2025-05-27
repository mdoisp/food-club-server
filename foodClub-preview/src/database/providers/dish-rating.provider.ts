import { DishRatingEntity } from "../entities/dish-rating.entity";
import { DishRatingRepository } from '../repositories/dish-rating.repository';

export const dishRatingProvider = [
  {
    provide: 'DISH_RATING_ENTITY',
    useValue: DishRatingEntity,
  },
  {
    provide: 'DISH_RATING_REPOSITORY',
    useClass: DishRatingRepository,
  },
];