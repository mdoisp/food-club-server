import { Inject, Injectable } from "@nestjs/common";
import { RestaurantRatingEntityInterface } from "src/domain/repositories/restaurant-rating.repository.interface";
import { RestaurantRatingRepository } from "src/infrastructure/database/repositories/restaurant-rating.repository";

@Injectable()
export class GetListByRestaurantService{
    constructor(
        @Inject('RESTAURANT_RATING_REPOSITORY')
        private readonly restaurantRatingRepository: RestaurantRatingRepository
    ) {}

    async execute(restaurantId: number):Promise<RestaurantRatingEntityInterface[]> {
        const restaurantRating = await this.restaurantRatingRepository.listByRestaurant(restaurantId);
        return restaurantRating;
    }
} 