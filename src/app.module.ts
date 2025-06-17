import { Module } from '@nestjs/common';
import { DishModule } from './interfaces/http/controllers/dish.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { DishController } from './interfaces/http/controllers/dish.controller';
import { CompanyModule } from './interfaces/http/controllers/company.module';
import { EmployeeModule } from './interfaces/http/controllers/employee.module';
// import { OrderModule } from './use-cases/order/order.module';
import { RestaurantModule } from './interfaces/http/controllers/restaurant.module';
import { EmployeeController } from './interfaces/http/controllers/employee.controller';
// import { OrderController } from './use-cases/order/order.controller';
import { RestaurantController } from './interfaces/http/controllers/restaurant.controller';
import { CompanyController } from './interfaces/http/controllers/company.controller';
import { UserController } from './interfaces/http/controllers/user.controller';
import { UserModule } from './interfaces/http/controllers/user.module';
import { DishRatingControlller } from './interfaces/http/controllers/dish-rating.controller';
import { DishRatingModule } from './interfaces/http/controllers/dish-rating.module';
import { AuthModule } from './interfaces/http/controllers/auth.module';
import { EmployeeWeeklyOrdersModule } from './interfaces/http/controllers/employee-weekly-orders.module';
import { EmployeeWeeklyOrdersController } from './interfaces/http/controllers/employee-weekly-orders.controller';
@Module({
  imports: [CompanyModule, DishModule, DatabaseModule, EmployeeModule, DishRatingModule,
            RestaurantModule, UserModule, AuthModule, EmployeeWeeklyOrdersModule],
  controllers: [CompanyController, DishController, EmployeeController, DishRatingControlller,
                RestaurantController,UserController, EmployeeWeeklyOrdersController],
  providers: [],
})
export class AppModule {}
