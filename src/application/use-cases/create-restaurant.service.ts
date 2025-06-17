import { Injectable } from "@nestjs/common";
import { RestaurantInterface } from "../../domain/models/restaurant.interface";
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class CreateRestaurantService {
    constructor(private restaurantRepository: RestaurantRepository){}
    execute(restaurant: RestaurantInterface): void {
        this.restaurantRepository.create(restaurant);
    }
}