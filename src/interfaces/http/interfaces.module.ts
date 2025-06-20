import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { UserController } from './controllers/user.controller';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantRatingController } from './controllers/restaurant-rating.controller';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeWeeklyOrdersController } from './controllers/employee-weekly-orders.controller';
import { DishController } from './controllers/dish.controller';
import { DishRatingControlller } from './controllers/dish-rating.controller';
import { CompanyController } from './controllers/company.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    ApplicationModule],
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
})
export class InterfacesModule {} 