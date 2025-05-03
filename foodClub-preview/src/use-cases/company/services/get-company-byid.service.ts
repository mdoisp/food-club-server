import { Injectable } from '@nestjs/common';
import { CompanyInterface } from '../company.interface';
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class GetCompanyByIdService {
  constructor(private companyRepository: CompanyRepository){}
  execute(id: number): CompanyInterface {
    return this.companyRepository.getById(id);
  }
}
