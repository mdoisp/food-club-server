import { Injectable } from "@nestjs/common";
import { CompanyInterface } from "../company.interface";
import { CompanyRepository } from 'src/database/repositories/company.repository';

@Injectable()
export class CreateCompanyService {
    constructor(private companyRepository: CompanyRepository){}
    execute(company: CompanyInterface): void {
        this.companyRepository.create(company);
    }
}