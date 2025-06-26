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
import { ListIndividualOrderByCompanyUseCase } from 'src/application/use-cases/list-individual-order-by-company.use-case';
import { individualOrderProvider } from 'src/infrastructure/providers/individual-order.provider';
import { IndividualOrderRepository } from 'src/infrastructure/database/repositories/individual-order.repository';
import { CreateCompanyOrderUseCase } from 'src/application/use-cases/create-company-order.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    ...companyProvider,
    ...userProvider,
    ...employeeProvider,
    ...individualOrderProvider,
    CompanyRepository,
    UserRepository,
    EmployeeRepository,
    IndividualOrderRepository,
    ListCompaniesService,
    GetCompanyByIdService, 
    CreateCompanyService, 
    UpdateCompanyService, 
    DeleteCompanyService,
    ListEmployeesByCompanyService,
    ListIndividualOrderByCompanyUseCase,
    CreateCompanyOrderUseCase
  ],
  exports: [
    ListCompaniesService,
    GetCompanyByIdService,
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService,
    ListEmployeesByCompanyService,
    ListIndividualOrderByCompanyUseCase,
    CreateCompanyOrderUseCase
  ]
})
export class CompanyModule {}