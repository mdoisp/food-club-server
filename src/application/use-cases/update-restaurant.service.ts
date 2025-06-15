import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../domain/models/restaurant.interface';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class UpdateRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}
  execute(id: number, restaurantData: RestaurantInterface): Promise<RestaurantInterface> {
    return this.restaurantRepository.update(id, restaurantData);
  }
}