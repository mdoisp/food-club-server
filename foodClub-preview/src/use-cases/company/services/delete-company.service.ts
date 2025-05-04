import { Inject, Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class DeleteCompanyService {
  constructor(@Inject('COMPANY_REPOSITORY')
    private readonly companyRepository: CompanyRepository) {}
  execute(id: number): void {
    this.companyRepository.delete(id);
  }
}