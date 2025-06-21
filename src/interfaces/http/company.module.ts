import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { companyProvider } from '../../infrastructure/providers/company.provider';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { userProvider } from 'src/infrastructure/providers/user.provider';
import { CreateCompanyService } from 'src/application/use-cases/create-company.use-cases';
import { DeleteCompanyService } from 'src/application/use-cases/delete-company.use-cases';
import { GetCompanyByIdService } from 'src/application/use-cases/get-company-byid.use-cases';
import { ListCompaniesService } from 'src/application/use-cases/list-companies.use-cases';
import { UpdateCompanyService } from 'src/application/use-cases/update-company.use-cases';
import { ListEmployeesByCompanyService } from 'src/application/use-cases/list-employees-by-company.use-cases';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';
import { employeeProvider } from 'src/infrastructure/providers/employee.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    ...companyProvider,
    ...userProvider,
    ...employeeProvider,
    CompanyRepository,
    UserRepository,
    EmployeeRepository,
    ListCompaniesService,
    GetCompanyByIdService, 
    CreateCompanyService, 
    UpdateCompanyService, 
    DeleteCompanyService,
    ListEmployeesByCompanyService
  ],
  exports: [
    ListCompaniesService,
    GetCompanyByIdService,
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService,
    ListEmployeesByCompanyService
  ]
})
export class CompanyModule {}