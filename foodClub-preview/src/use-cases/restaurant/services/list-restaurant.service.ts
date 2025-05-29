import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../restaurant.interface';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';

@Injectable()
export class ListRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository){}
  execute(): Promise<RestaurantInterface[]> {
    return this.restaurantRepository.list();
  }
}