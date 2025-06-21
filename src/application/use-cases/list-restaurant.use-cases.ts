import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { RestaurantRatingRepository } from 'src/infrastructure/database/repositories/restaurant-rating.repository';

@Injectable()
export class ListRestaurantService {
  constructor(
    private restaurantRepository: RestaurantRepository,
    private restaurantRatingRepository: RestaurantRatingRepository
  ){}
  async execute(): Promise<RestaurantInterface[]> {
    const restaurants = await this.restaurantRepository.list();
    const restaurantRatings = await Promise.all(restaurants.map(async (restaurant: RestaurantInterface) => {
      const restaurantRatings = await this.restaurantRatingRepository.getByRestaurantId(restaurant.id);
      const averageRating = restaurantRatings.reduce((acc, rating) => acc + rating.rating, 0) / restaurantRatings.length;
      return {
        averageRating: averageRating
      };
      }));
    const restaurantsWithAverageRating = restaurants.map((restaurant: RestaurantInterface, index: number) => ({
      id: restaurant.id,
      name: restaurant.name,
      userId: restaurant.userId,
      cnpj: restaurant.cnpj,
      cep: restaurant.cep,
      number: restaurant.number,
      profileImage: restaurant.profileImage,
      averageRating: restaurantRatings[index].averageRating
    }));
    return restaurantsWithAverageRating;
  }
}