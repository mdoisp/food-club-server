import { Inject, Injectable } from "@nestjs/common";
import { DishRatingEntityInterface } from "src/domain/repositories/dish-rating.interface";
import { DishRatingRepository } from "src/infrastructure/database/repositories/dish-rating.repository";

@Injectable()
export class GetListByDishService{
    constructor(
        @Inject('DISH_RATING_REPOSITORY')
        private readonly dishRatingRepository: DishRatingRepository
    ) {}

    async execute(dishId: number):Promise<DishRatingEntityInterface[]> {
        const dishRating = await this.dishRatingRepository.listByDish(dishId);
        return dishRating;
    }
}