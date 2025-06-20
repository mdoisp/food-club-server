import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "src/infrastructure/strategies/jwt.strategy";
import { CreateCompanyService } from "./use-cases/create-company.use-cases";
import { CreateEmployeeService } from "./use-cases/create-employee.use-cases";
import { CreateRestaurantService } from "./use-cases/create-restaurant.use-cases";
import { CreateUserService } from "./use-cases/create-user.use-cases";
import { DeleteUserService } from "./use-cases/delete-user.use-cases";
import { GetUserByEmailService } from "./use-cases/get-byemail.use-cases";
import { GetUserByIdService } from "./use-cases/get-user-byid.use-cases";
import { ListUsersService } from "./use-cases/list-users.use-cases";
import { AuthService } from "./use-cases/login.use-cases";
import { UpdateUserService } from "./use-cases/update-user.use-cases";
import { ListDishesByRestaurantService } from "./use-cases/list-dishes-by-restaurant.use-cases";
import { DeleteRestaurantService } from "./use-cases/delete-restaurant.use-cases";
import { GetRestaurantByIdService } from "./use-cases/get-restaurant-byid.use-cases";
import { ListRestaurantService } from "./use-cases/list-restaurant.use-cases";
import { UpdateRestaurantService } from "./use-cases/update-restaurant.use-cases";
import { CreateRestaurantRatingService } from "./use-cases/create-restaurant-rating.use-cases";
import { DeleteRestaurantRatingService } from "./use-cases/delete-restaurant-rating.use-cases";
import { GetByRestaurantAndUserService } from "./use-cases/get-byrestaurant-and-user.use-cases";
import { GetListByRestaurantService } from "./use-cases/list-byrestaurant.use-cases";
import { UpdateRestaurantRatingService } from "./use-cases/update-restaurant-rating.use-cases";
import { DeleteEmployeeService } from "./use-cases/delete-employee.use-cases";
import { GetEmployeeByIdService } from "./use-cases/get-employee-byid.use-cases";
import { ListEmployeesService } from "./use-cases/list-employees.use-cases";
import { UpdateEmployeeService } from "./use-cases/update-employee.use-cases";
import { CreateOrUpdateWeeklyOrderService } from "./use-cases/create-or-update-weekly-order.use-cases";
import { DeleteWeeklyOrderService } from "./use-cases/delete-weekly-order.use-cases";
import { GetWeeklyOrdersByEmployeeService } from "./use-cases/get-weekly-orders-by-employee.use-cases";
import { AverageRatingByRestaurantService } from "./use-cases/average-rating-by-restaurant.use-cases";
import { CreateDishService } from "./use-cases/create-dish.use-cases";
import { DeleteDishService } from "./use-cases/delete-dish.use-cases";
import { GetDishByIdService } from "./use-cases/get-dish-byid.use-cases";
import { ListDishesService } from "./use-cases/list-dishes.use-cases";
import { UpdateDishService } from "./use-cases/update-dish.use-cases";
import { GetByDishAndUserService } from "./use-cases/get-bydish-and-user.use-cases";
import { CreateDishRatingService } from "./use-cases/create-dish-rating.use-cases";
import { DeleteDishRatingService } from "./use-cases/delete-dish-rating.use-cases";
import { GetListByDishService } from "./use-cases/list-bydish.use-cases";
import { UpdateDishRatingService } from "./use-cases/update-dish-rating.use-cases";
import { DeleteCompanyService } from "./use-cases/delete-company.use-cases";
import { GetCompanyByIdService } from "./use-cases/get-company-byid.use-cases";
import { ListCompaniesService } from "./use-cases/list-companies.use-cases";
import { UpdateCompanyService } from "./use-cases/update-company.use-cases";
import { InfrastructureModule } from "src/infrastructure/infrastructure.module";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [
        InfrastructureModule,
        PassportModule,
    ],
    providers: [
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
        ListRestaurantService,
        GetRestaurantByIdService, 
        UpdateRestaurantService, 
        DeleteRestaurantService,
        ListDishesByRestaurantService,
        CreateRestaurantRatingService,
        GetListByRestaurantService,
        GetByRestaurantAndUserService,
        UpdateRestaurantRatingService,
        DeleteRestaurantRatingService,
        ListEmployeesService,
        GetEmployeeByIdService,
        UpdateEmployeeService,
        DeleteEmployeeService,
        CreateOrUpdateWeeklyOrderService,
        GetWeeklyOrdersByEmployeeService,
        DeleteWeeklyOrderService,
        ListDishesService, 
        GetDishByIdService, 
        CreateDishService, 
        UpdateDishService, 
        DeleteDishService,
        AverageRatingByRestaurantService,
        UpdateDishRatingService, 
        DeleteDishRatingService,
        GetListByDishService,
        CreateDishRatingService,
        GetByDishAndUserService,
        ListCompaniesService,
        GetCompanyByIdService, 
        UpdateCompanyService, 
        DeleteCompanyService,],
    exports: [
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
        ListRestaurantService,
        GetRestaurantByIdService, 
        UpdateRestaurantService, 
        DeleteRestaurantService,
        ListDishesByRestaurantService,
        CreateRestaurantRatingService,
        GetListByRestaurantService,
        GetByRestaurantAndUserService,
        UpdateRestaurantRatingService,
        DeleteRestaurantRatingService,
        ListEmployeesService,
        GetEmployeeByIdService,
        UpdateEmployeeService,
        DeleteEmployeeService,
        CreateOrUpdateWeeklyOrderService,
        GetWeeklyOrdersByEmployeeService,
        DeleteWeeklyOrderService,
        ListDishesService, 
        GetDishByIdService, 
        CreateDishService, 
        UpdateDishService, 
        DeleteDishService,
        AverageRatingByRestaurantService,
        UpdateDishRatingService, 
        DeleteDishRatingService,
        GetListByDishService,
        CreateDishRatingService,
        GetByDishAndUserService,
        ListCompaniesService,
        GetCompanyByIdService,
        UpdateCompanyService,
        DeleteCompanyService,],
  })
  export class ApplicationModule {}