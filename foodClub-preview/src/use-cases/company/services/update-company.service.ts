import { Inject, Injectable } from '@nestjs/common';
import { CompanyInterface } from '../company.interface';
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class UpdateCompanyService {
  constructor(@Inject('COMPANY_REPOSITORY')
    private readonly companyRepository: CompanyRepository) {}
  execute(id: number, companyData: CompanyInterface): CompanyInterface {
    return this.companyRepository.update(id, companyData);
  }
}