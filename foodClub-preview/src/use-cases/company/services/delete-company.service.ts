import { Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/database/repositories/Company.repository';

@Injectable()
export class DeleteCompanyService {
  constructor(private companyRepository: CompanyRepository) {}
  execute(id: number): void {
    this.companyRepository.delete(id);
  }
}