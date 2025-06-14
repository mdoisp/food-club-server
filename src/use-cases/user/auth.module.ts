import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../../database/database.module';
import { AuthService } from './services/login.service';
import { GetUserByEmailService } from './services/get-byemail.service';
import { CompanyRepository } from 'src/database/repositories/company.repository';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';
import { userProvider } from 'src/database/providers/user.provider';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

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
  providers: [
    ...userProvider,
    AuthService,
    GetUserByEmailService,
    CompanyRepository,
    RestaurantRepository,
    EmployeeRepository,
    JwtStrategy,
  ],
  exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {} 