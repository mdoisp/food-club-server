import { Module } from '@nestjs/common';

import { DishController } from './controllers/dish.controller';
import { ListDishesService } from '../../application/use-cases/list-dishes.use-cases';
import { GetDishByIdService } from '../../application/use-cases/get-dish-byid.use-cases';
import { CreateDishService } from '../../application/use-cases/create-dish.use-cases';
import { UpdateDishService } from '../../application/use-cases/update-dish.use-cases';
import { DeleteDishService } from '../../application/use-cases/delete-dish.use-cases';
import { ListDishesByRestaurantService } from '../../application/use-cases/list-dishes-by-restaurant.use-cases';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';
import { dishRatingProvider } from 'src/infrastructure/providers/dish-rating.provider';
import { AverageRatingByRestaurantService } from '../../application/use-cases/average-rating-by-restaurant.use-cases';

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
