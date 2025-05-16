import { Injectable, Inject } from '@nestjs/common';
import { CompanyEntityInterface } from 'src/database/interfaces/company.interface';
import { EmployeeEntityInterface } from 'src/database/interfaces/employee.interface';
import { CompanyRepository } from 'src/database/repositories/company.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class ListCompaniesService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private readonly companyRepository: CompanyRepository
  ) {}

  execute(): Promise<CompanyEntityInterface[]> {
    return this.companyRepository.list();
  }
}