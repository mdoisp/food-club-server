import { RestaurantRepository } from '../../repositories/restaurant.repository';

export class DeleteRestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.restaurantRepository.delete(id);
  }
}
