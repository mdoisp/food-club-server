import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';
import { GetCompanyByIdService } from '../../application/use-cases/get-company-byid.service';
import { CreateCompanyService } from '../../application/use-cases/create-company.service';
import { UpdateCompanyService } from '../../application/use-cases/update-company.service';
import { DeleteCompanyService } from '../../application/use-cases/delete-company.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { companyProvider } from '../../infrastructure/providers/company.provider';
import { ListCompaniesService } from '../../application/use-cases/list-companies.service';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { userProvider } from 'src/infrastructure/providers/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    ...companyProvider,
    ...userProvider,
    CompanyRepository,
    UserRepository,
    ListCompaniesService,
    GetCompanyByIdService, 
    CreateCompanyService, 
    UpdateCompanyService, 
    DeleteCompanyService
  ],
  exports: [
    ListCompaniesService,
    GetCompanyByIdService,
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService
  ]
})
export class CompanyModule {}