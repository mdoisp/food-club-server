import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { DishController } from './interfaces/http/controllers/dish.controller';
import { EmployeeController } from './interfaces/http/controllers/employee.controller';
import { RestaurantController } from './interfaces/http/controllers/restaurant.controller';
import { CompanyController } from './interfaces/http/controllers/company.controller';
import { UserController } from './interfaces/http/controllers/user.controller';
import { DishRatingControlller } from './interfaces/http/controllers/dish-rating.controller';
import { EmployeeWeeklyOrdersController } from './interfaces/http/controllers/employee-weekly-orders.controller';
import { RestaurantRatingController } from './interfaces/http/controllers/restaurant-rating.controller';
import { InterfacesModule } from './interfaces/http/interfaces.module';
@Module({
  imports: [InterfacesModule, DatabaseModule],
  controllers: [CompanyController, DishController, EmployeeController, DishRatingControlller,
                RestaurantController,UserController, EmployeeWeeklyOrdersController, RestaurantRatingController],
  providers: [],
})
export class AppModule {}
