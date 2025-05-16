import { Inject, Injectable } from '@nestjs/common';
import { CompanyInterface } from '../company.interface';
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class GetCompanyByIdService {
  constructor(@Inject('COMPANY_REPOSITORY')
  private readonly companyRepository: CompanyRepository){}
  execute(id: number): Promise<CompanyInterface> {
    return this.companyRepository.getById(id);
  }
}
