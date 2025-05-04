import { RestaurantEntity } from "../entities/restaurant.entity";
import { RestaurantRepository } from "../repositories/restaurant.repository";

export const restaurantProviders = [{
    provide: 'RESTAURANT_ENTITY',
    useValue: RestaurantEntity
},
  {
    provide: 'RESTAURANT_REPOSITORY', // Token de injeção
    useClass: RestaurantRepository // Usa a classe diretamente
  }
]