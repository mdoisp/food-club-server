import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantRepository } from '../../repositories/restaurant.repository';

export class CreateRestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(
    restaurantData: Omit<Restaurant, 'id' | 'dishes'> & { id?: string },
  ): Promise<Restaurant> {
    const restaurant = new Restaurant({
      id: restaurantData.id || this.generateId(),
      name: restaurantData.name,
      description: restaurantData.description,
      address: restaurantData.address,
      phone: restaurantData.phone,
      email: restaurantData.email,
      logo: restaurantData.logo,
      dishes: [],
    });

    return this.restaurantRepository.create(restaurant);
  }

  private generateId(): string {
    return Date.now().toString();
  }
}
