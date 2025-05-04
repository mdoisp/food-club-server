import { RestaurantEntity } from "../entities/restaurant.entity";

export const restaurantProvider = [{
    provide: 'RESTAURANT_ENTITY',
    useValue: RestaurantEntity
}]