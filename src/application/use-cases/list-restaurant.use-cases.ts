import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class ListRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository){}
  execute(): Promise<RestaurantInterface[]> {
    return this.restaurantRepository.list();
  }
}