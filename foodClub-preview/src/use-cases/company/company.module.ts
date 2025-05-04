import { Module } from '@nestjs/common';

import { CompanyController } from './company.controller';
import { GetCompanyByIdService } from './services/get-company-byid.service';
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [GetCompanyByIdService, CreateCompanyService, UpdateCompanyService, DeleteCompanyService],
})
export class CompanyModule {}
