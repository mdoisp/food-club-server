import { Module } from '@nestjs/common';

import { RestaurantController } from './restaurant.controller';
import { GetRestaurantByIdService } from './services/get-restaurant-byid.service';
import { CreateRestaurantService } from './services/create-restaurant.service';
import { UpdateRestaurantService } from './services/update-restaurant.service';
import { DeleteRestaurantService } from './services/delete-restaurant.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [GetRestaurantByIdService, CreateRestaurantService, UpdateRestaurantService, DeleteRestaurantService],
})
export class DishModule {}

