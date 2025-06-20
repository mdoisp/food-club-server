import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';
import { GetCompanyByIdService } from '../../application/use-cases/get-company-byid.use-cases';
import { CreateCompanyService } from '../../application/use-cases/create-company.use-cases';
import { UpdateCompanyService } from '../../application/use-cases/update-company.use-cases';
import { DeleteCompanyService } from '../../application/use-cases/delete-company.use-cases';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { companyProvider } from '../../infrastructure/providers/company.provider';
import { ListCompaniesService } from '../../application/use-cases/list-companies.use-cases';
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