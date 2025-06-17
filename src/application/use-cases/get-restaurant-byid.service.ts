import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../domain/models/restaurant.interface';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class GetRestaurantByIdService {
  constructor(private restaurantRepository: RestaurantRepository){}
  execute(id: number): Promise<RestaurantInterface> {
    return this.restaurantRepository.getById(id);
  }
}
