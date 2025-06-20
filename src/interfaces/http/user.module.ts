import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { UserController } from "./controllers/user.controller";
import { CreateUserService } from "../../application/use-cases/create-user.use-cases";
import { DeleteUserService } from "../../application/use-cases/delete-user.use-cases";
import { GetUserByIdService } from "../../application/use-cases/get-user-byid.use-cases";
import { ListUsersService } from "../../application/use-cases/list-users.use-cases";
import { UpdateUserService } from "../../application/use-cases/update-user.use-cases";
import { userProvider } from "src/infrastructure/providers/user.provider";
import { UserRepository } from "src/infrastructure/database/repositories/user.repository";
import { GetUserByEmailService } from "../../application/use-cases/get-byemail.use-cases";
import { AuthService } from "../../application/use-cases/login.use-cases";
import { JwtService } from "@nestjs/jwt";
import { AuthModule } from './auth.module';
import { CreateEmployeeService } from "src/application/use-cases/create-employee.use-cases";
import { CreateRestaurantService } from "src/application/use-cases/create-restaurant.use-cases";
import { CreateCompanyService } from "src/application/use-cases/create-company.use-cases";

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