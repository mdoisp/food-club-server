import { Module } from '@nestjs/common';

import { DishController } from './controllers/dish.controller';
import { ListDishesService } from '../../application/use-cases/list-dishes.service';
import { GetDishByIdService } from '../../application/use-cases/get-dish-byid.service';
import { CreateDishService } from '../../application/use-cases/create-dish.service';
import { UpdateDishService } from '../../application/use-cases/update-dish.service';
import { DeleteDishService } from '../../application/use-cases/delete-dish.service';
import { ListDishesByRestaurantService } from '../../application/use-cases/list-dishes-by-restaurant.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';
import { dishRatingProvider } from 'src/infrastructure/providers/dish-rating.provider';
import { AverageRatingByRestaurantService } from '../../application/use-cases/average-rating-by-restaurant.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DishController],
  providers: [
    ...dishProvider,
    ...dishRatingProvider,
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService,
    ListDishesByRestaurantService,
    AverageRatingByRestaurantService
  ],
  exports: [
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService,
    ListDishesByRestaurantService,
    AverageRatingByRestaurantService
  ]
})
export class DishModule {}
