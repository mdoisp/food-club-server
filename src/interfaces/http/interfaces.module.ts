import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

// Controllers
import { UserController } from './controllers/user.controller';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantRatingController } from './controllers/restaurant-rating.controller';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeWeeklyOrdersController } from './controllers/employee-weekly-orders.controller';
import { DishController } from './controllers/dish.controller';
import { DishRatingControlller } from './controllers/dish-rating.controller';
import { CompanyController } from './controllers/company.controller';

// Providers e Services
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { userProvider } from 'src/infrastructure/providers/user.provider';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { CreateUserService } from '../../application/use-cases/create-user.use-cases';
import { DeleteUserService } from '../../application/use-cases/delete-user.use-cases';
import { GetUserByIdService } from '../../application/use-cases/get-user-byid.use-cases';
import { ListUsersService } from '../../application/use-cases/list-users.use-cases';
import { UpdateUserService } from '../../application/use-cases/update-user.use-cases';
import { GetUserByEmailService } from '../../application/use-cases/get-byemail.use-cases';
import { AuthService } from '../../application/use-cases/login.use-cases';
import { JwtService } from '@nestjs/jwt';
import { CreateEmployeeService } from 'src/application/use-cases/create-employee.use-cases';
import { CreateRestaurantService } from 'src/application/use-cases/create-restaurant.use-cases';
import { CreateCompanyService } from 'src/application/use-cases/create-company.use-cases';
import { JwtStrategy } from '../../infrastructure/strategies/jwt.strategy';

// Restaurant
import { restaurantProvider } from 'src/infrastructure/providers/restaurant.provider';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { ListRestaurantService } from '../../application/use-cases/list-restaurant.use-cases';
import { GetRestaurantByIdService } from '../../application/use-cases/get-restaurant-byid.use-cases';
import { UpdateRestaurantService } from '../../application/use-cases/update-restaurant.use-cases';
import { DeleteRestaurantService } from '../../application/use-cases/delete-restaurant.use-cases';
import { ListDishesByRestaurantService } from 'src/application/use-cases/list-dishes-by-restaurant.use-cases';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';
import { restaurantRatingProvider } from 'src/infrastructure/providers/restaurant-rating.provider';
import { dishRatingProvider } from 'src/infrastructure/providers/dish-rating.provider';

// Restaurant Rating
import { CreateRestaurantRatingService } from '../../application/use-cases/create-restaurant-rating.use-cases';
import { GetListByRestaurantService } from '../../application/use-cases/list-byrestaurant.use-cases';
import { GetByRestaurantAndUserService } from '../../application/use-cases/get-byrestaurant-and-user.use-cases';
import { UpdateRestaurantRatingService } from '../../application/use-cases/update-restaurant-rating.use-cases';
import { DeleteRestaurantRatingService } from '../../application/use-cases/delete-restaurant-rating.use-cases';
import { RestaurantRatingRepository } from 'src/infrastructure/database/repositories/restaurant-rating.repository';

// Employee
import { employeeProvider } from 'src/infrastructure/providers/employee.provider';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';
import { ListEmployeesService } from '../../application/use-cases/list-employees.use-cases';
import { GetEmployeeByIdService } from '../../application/use-cases/get-employee-byid.use-cases';
import { UpdateEmployeeService } from '../../application/use-cases/update-employee.use-cases';
import { DeleteEmployeeService } from '../../application/use-cases/delete-employee.use-cases';

// Employee Weekly Orders
import { employeeWeeklyOrdersProvider } from 'src/infrastructure/providers/employee-weekly-orders.provider';
import { CreateOrUpdateWeeklyOrderService } from '../../application/use-cases/create-or-update-weekly-order.use-cases';
import { GetWeeklyOrdersByEmployeeService } from '../../application/use-cases/get-weekly-orders-by-employee.use-cases';
import { DeleteWeeklyOrderService } from '../../application/use-cases/delete-weekly-order.use-cases';
import { individualOrderProvider } from 'src/infrastructure/providers/individual-order.provider';
import { orderItemProvider } from 'src/infrastructure/providers/order-item.provider';

// Dish
import { ListDishesService } from '../../application/use-cases/list-dishes.use-cases';
import { GetDishByIdService } from '../../application/use-cases/get-dish-byid.use-cases';
import { CreateDishService } from '../../application/use-cases/create-dish.use-cases';
import { UpdateDishService } from '../../application/use-cases/update-dish.use-cases';
import { DeleteDishService } from '../../application/use-cases/delete-dish.use-cases';
import { AverageRatingByRestaurantService } from '../../application/use-cases/average-rating-by-restaurant.use-cases';

// Dish Rating
import { UpdateDishRatingService } from '../../application/use-cases/update-dish-rating.use-cases';
import { DeleteDishRatingService } from '../../application/use-cases/delete-dish-rating.use-cases';
import { CreateDishRatingService } from '../../application/use-cases/create-dish-rating.use-cases';
import { GetByDishAndUserService } from '../../application/use-cases/get-bydish-and-user.use-cases';
import { GetListByDishService } from '../../application/use-cases/list-bydish.use-cases';

// Company
import { GetCompanyByIdService } from '../../application/use-cases/get-company-byid.use-cases';
import { UpdateCompanyService } from '../../application/use-cases/update-company.use-cases';
import { DeleteCompanyService } from '../../application/use-cases/delete-company.use-cases';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { companyProvider } from '../../infrastructure/providers/company.provider';
import { ListCompaniesService } from '../../application/use-cases/list-companies.use-cases';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { 
          expiresIn: `${configService.get<number>('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    UserController,
    RestaurantController,
    RestaurantRatingController,
    EmployeeController,
    EmployeeWeeklyOrdersController,
    DishController,
    DishRatingControlller,
    CompanyController,
  ],
  providers: [
    // User
    ...userProvider,
    UserRepository,
    ListUsersService,
    GetUserByIdService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    GetUserByEmailService,
    AuthService,
    JwtService,
    CreateEmployeeService,
    CreateCompanyService,
    CreateRestaurantService,
    JwtStrategy,
    // Restaurant
    ...restaurantProvider,
    ...dishProvider,
    ...restaurantRatingProvider,
    ...dishRatingProvider,
    RestaurantRepository,
    ListRestaurantService,
    GetRestaurantByIdService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService,
    // Restaurant Rating
    CreateRestaurantRatingService,
    GetListByRestaurantService,
    GetByRestaurantAndUserService,
    UpdateRestaurantRatingService,
    DeleteRestaurantRatingService,
    RestaurantRatingRepository, 
    // Employee
    ...employeeProvider,
    EmployeeRepository, 
    ListEmployeesService,
    GetEmployeeByIdService,
    UpdateEmployeeService,
    DeleteEmployeeService,
    // Employee Weekly Orders
    ...employeeWeeklyOrdersProvider,
    ...individualOrderProvider,
    ...orderItemProvider,
    CreateOrUpdateWeeklyOrderService,
    GetWeeklyOrdersByEmployeeService,
    DeleteWeeklyOrderService,
    // Dish
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService,
    AverageRatingByRestaurantService,
    // Dish Rating
    UpdateDishRatingService, 
    DeleteDishRatingService,
    GetListByDishService,
    CreateDishRatingService,
    GetByDishAndUserService,
    // Company
    ...companyProvider,
    CompanyRepository,
    ListCompaniesService,
    GetCompanyByIdService, 
    UpdateCompanyService, 
    DeleteCompanyService,
  ],
  exports: [
    // User
    ListUsersService,
    GetUserByIdService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    GetUserByEmailService,
    AuthService,
    JwtService,
    CreateEmployeeService,
    CreateCompanyService,
    CreateRestaurantService,
    JwtStrategy,
    // Restaurant
    ListRestaurantService,
    GetRestaurantByIdService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService,
    // Restaurant Rating
    CreateRestaurantRatingService,
    GetListByRestaurantService,
    GetByRestaurantAndUserService,
    UpdateRestaurantRatingService,
    DeleteRestaurantRatingService,
    RestaurantRatingRepository, 
    // Employee
    ListEmployeesService,
    GetEmployeeByIdService,
    UpdateEmployeeService,
    DeleteEmployeeService,
    // Employee Weekly Orders
    CreateOrUpdateWeeklyOrderService,
    GetWeeklyOrdersByEmployeeService,
    DeleteWeeklyOrderService,
    // Dish
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService,
    AverageRatingByRestaurantService,
    // Dish Rating
    UpdateDishRatingService, 
    DeleteDishRatingService,
    GetListByDishService,
    CreateDishRatingService,
    GetByDishAndUserService,
    // Company
    ListCompaniesService,
    GetCompanyByIdService,
    UpdateCompanyService,
    DeleteCompanyService,
  ]
})
export class InterfacesModule {} 