import { Inject, Injectable } from "@nestjs/common";
import { RestaurantRatingEntityInterface } from "src/domain/repositories/restaurant-rating.interface";
import { RestaurantRatingRepository } from "src/infrastructure/database/repositories/restaurant-rating.repository";

@Injectable()
export class GetByRestaurantAndUserService {
    constructor(
        @Inject('RESTAURANT_RATING_REPOSITORY')
        private readonly restaurantRatingRepository: RestaurantRatingRepository
    ) {}

    async execute(restaurantId: number, userId: number): Promise<RestaurantRatingEntityInterface> {
        const restaurantRating = await this.restaurantRatingRepository.getByRestaurantAndUser(restaurantId, userId)
        return restaurantRating;
    }
} 