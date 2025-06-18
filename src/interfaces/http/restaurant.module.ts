import { Module } from '@nestjs/common';

import { RestaurantController } from './controllers/restaurant.controller';
import { GetRestaurantByIdService } from '../../application/use-cases/get-restaurant-byid.service';
import { CreateRestaurantService } from '../../application/use-cases/create-restaurant.service';
import { UpdateRestaurantService } from '../../application/use-cases/update-restaurant.service';
import { DeleteRestaurantService } from '../../application/use-cases/delete-restaurant.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { restaurantProvider } from 'src/infrastructure/providers/restaurant.provider';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { ListRestaurantService } from '../../application/use-cases/list-restaurant.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [
    ...restaurantProvider,
    // ...restaurantDishProvider,
    RestaurantRepository,
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService
  ],
  exports: [
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService
  ]
})
export class RestaurantModule {}

