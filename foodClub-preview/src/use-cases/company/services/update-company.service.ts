import { Injectable } from '@nestjs/common';
import { CompanyInterface } from '../company.interface';
import { CompanyRepository } from 'src/database/repositories/Company.repository';

@Injectable()
export class UpdateCompanyService {
  constructor(private companyRepository: CompanyRepository) {}
  execute(id: number, companyData: CompanyInterface): CompanyInterface {
    return this.companyRepository.update(id, companyData);
  }
}