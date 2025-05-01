import { Module } from '@nestjs/common';

import { DishController } from './dish.controller';
import { ListDishService } from './services/list-dish.service';
import { GetDishByIdService } from './services/get-dish-byid.service';
import { CreateDishService } from './services/create-dish.service';
import { UpdateDishService } from './services/update-dish.service';
import { DeleteDishService } from './services/delete-dish.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DishController],
  providers: [ListDishService, GetDishByIdService, CreateDishService, UpdateDishService, DeleteDishService],
})
export class DishModule {}

