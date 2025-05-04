import { Inject, Injectable } from "@nestjs/common";
import { CompanyInterface } from "../company.interface";
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class CreateCompanyService {
    constructor(@Inject('COMPANY_REPOSITORY')
      private readonly companyRepository: CompanyRepository){}
    execute(company: CompanyInterface): void {
      console.log(company);
        this.companyRepository.create(company);
    }
}