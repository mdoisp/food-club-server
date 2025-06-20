import { Module } from "@nestjs/common";
import { UserRepository } from "./database/repositories/user.repository";
import { userProvider } from "./providers/user.provider";
import { RestaurantRepository } from "./database/repositories/restaurant.repository";
import { dishRatingProvider } from "./providers/dish-rating.provider";
import { dishProvider } from "./providers/dish.provider";
import { restaurantRatingProvider } from "./providers/restaurant-rating.provider";
import { restaurantProvider } from "./providers/restaurant.provider";
import { EmployeeRepository } from "./database/repositories/employee.repository";
import { employeeProvider } from "./providers/employee.provider";
import { RestaurantRatingRepository } from "./database/repositories/restaurant-rating.repository";
import { employeeWeeklyOrdersProvider } from "./providers/employee-weekly-orders.provider";
import { individualOrderProvider } from "./providers/individual-order.provider";
import { orderItemProvider } from "./providers/order-item.provider";
import { CompanyRepository } from "./database/repositories/company.repository";
import { companyProvider } from "./providers/company.provider";
import { DishRepository } from "./database/repositories/dish.repository";
import { databaseProvider } from "./providers/database.provider";

@Module({
    providers: [
      UserRepository,
      RestaurantRepository,
      EmployeeRepository, 
      RestaurantRatingRepository, 
      CompanyRepository,
      DishRepository,
      ...userProvider,
      ...restaurantProvider,
      ...dishProvider,
      ...restaurantRatingProvider,
      ...dishRatingProvider,
      ...employeeProvider,
      ...employeeWeeklyOrdersProvider,
      ...individualOrderProvider,
      ...orderItemProvider,
      ...companyProvider,
      ...databaseProvider, 
    ],
    exports: [
      UserRepository,
      RestaurantRepository,
      EmployeeRepository, 
      RestaurantRatingRepository, 
      CompanyRepository,
      DishRepository,
      ...userProvider,
      ...restaurantProvider,
      ...dishProvider,
      ...restaurantRatingProvider,
      ...dishRatingProvider,
      ...employeeProvider,
      ...employeeWeeklyOrdersProvider,
      ...individualOrderProvider,
      ...orderItemProvider,
      ...companyProvider,
      ...databaseProvider, 
    ],
  })
  export class InfrastructureModule {}
  