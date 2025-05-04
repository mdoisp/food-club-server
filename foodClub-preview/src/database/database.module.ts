import { Module } from '@nestjs/common';
import { DishRepository } from './repositories/dish.repository';
import { databaseProvider } from './database.provider';
import { dishProvider } from './providers/dish.provider';

@Module({
    providers:[DishRepository, ...databaseProvider, ...dishProvider],
    exports:[DishRepository]
})
export class DatabaseModule {}
