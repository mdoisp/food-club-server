import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { AuthService } from '../../../application/use-cases/login.service';
import { GetUserByEmailService } from '../../../application/use-cases/get-byemail.service';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';
import { userProvider } from 'src/infrastructure/providers/user.provider';
import { JwtStrategy } from '../../../infrastructure/strategies/jwt.strategy';
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