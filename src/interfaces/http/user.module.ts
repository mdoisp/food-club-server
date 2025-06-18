import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { UserController } from "./controllers/user.controller";
import { CreateUserService } from "../../application/use-cases/create-user.service";
import { DeleteUserService } from "../../application/use-cases/delete-user.service";
import { GetUserByIdService } from "../../application/use-cases/get-user-byid.service";
import { ListUsersService } from "../../application/use-cases/list-users.service";
import { UpdateUserService } from "../../application/use-cases/update-user.service";
import { userProvider } from "src/infrastructure/providers/user.provider";
import { UserRepository } from "src/infrastructure/database/repositories/user.repository";
import { GetUserByEmailService } from "../../application/use-cases/get-byemail.service";
import { AuthService } from "../../application/use-cases/login.service";
import { JwtService } from "@nestjs/jwt";
import { AuthModule } from './auth.module';
import { CreateEmployeeService } from "src/application/use-cases/create-employee.service";
import { CreateRestaurantService } from "src/application/use-cases/create-restaurant.service";
import { CreateCompanyService } from "src/application/use-cases/create-company.service";

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
  ],
    controllers: [UserController],
    providers: [
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
        CreateRestaurantService
    ],
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
        CreateRestaurantService
    ]
})
export class UserModule {}