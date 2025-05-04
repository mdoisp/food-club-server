import { Module } from '@nestjs/common';
import { DishModule } from './use-cases/dish/dish.module';
import { DatabaseModule } from './database/database.module';
import { DishController } from './use-cases/dish/dish.controller';
import { CompanyModule } from './use-cases/company/company.module';
import { EmployeeModule } from './use-cases/employee/employee.module';
import { OrderModule } from './use-cases/order/order.module';
import { RestaurantModule } from './use-cases/restaurant/restaurant.module';
import { EmployeeController } from './use-cases/employee/employee.controller';
import { OrderController } from './use-cases/order/order.controller';
import { RestaurantController } from './use-cases/restaurant/restaurant.controller';
import { CompanyController } from './use-cases/company/company.controller';
@Module({
  imports: [CompanyModule, DishModule, DatabaseModule, EmployeeModule, OrderModule, RestaurantModule],
  controllers: [CompanyController, DishController, EmployeeController, OrderController, RestaurantController],
  providers: [],
})
export class AppModule {}
