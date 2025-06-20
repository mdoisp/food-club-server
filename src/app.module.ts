import { Module } from '@nestjs/common';
import { InterfacesModule } from './interfaces/http/interfaces.module';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
@Module({
  imports: [InterfacesModule,
    ApplicationModule,
    InfrastructureModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
