import { Inject, Injectable } from "@nestjs/common";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { DishRatingRepository } from "src/database/repositories/dish-rating.repository";

@Injectable()
export class GetListByDish{
    constructor(
        @Inject('DISH_RATING_REPOSITORY')
        private readonly dishRatingRepository: DishRatingRepository
    ){}

    async execute(dishId: number):Promise<DishRatingEntityInterface[]> {
        const dishRating = await this.dishRatingRepository.listByDish(dishId);
        return dishRating;
    }
}