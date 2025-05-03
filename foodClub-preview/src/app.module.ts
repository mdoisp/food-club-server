import { Module } from '@nestjs/common';
import { DishModule } from './use-cases/dish/dish.module';
import { DatabaseModule } from './database/database.module';
import { DishController } from './use-cases/dish/dish.controller';

@Module({
  imports: [DishModule, DatabaseModule],
  controllers: [DishController],
  providers: [],
})
export class AppModule {}
