import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { GetCompanyByIdService } from './services/get-company-byid.service';
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyRepository } from 'src/database/repositories/Company.repository';
import { companyProviders } from './../../database/providers/company.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    ...companyProviders, // Adiciona o provider da entidade
    CompanyRepository,  // Adiciona o repositório
    GetCompanyByIdService, 
    CreateCompanyService, 
    UpdateCompanyService, 
    DeleteCompanyService
  ],
  exports: [ // Adicione esta seção
    GetCompanyByIdService,
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService
  ]
})
export class CompanyModule {}