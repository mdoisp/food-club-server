import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class ListDishesByRestaurantService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ) {}
  async execute(restaurantId: number): Promise<DishInterface[]> {
    return await this.dishRepository.listByRestaurant(restaurantId);
  }
} 