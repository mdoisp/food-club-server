import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { CompanyEntityInterface } from "../../domain/repositories/company.repository.interface";
import { CompanyRepository } from '../../infrastructure/database/repositories/company.repository';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { validateCNPJ } from '../../domain/utils/cnpj-validator';

@Injectable()
export class CreateCompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository,
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(company: CompanyEntityInterface): Promise<CompanyEntityInterface> {
        const { userId, cnpj } = company;
        
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new BadRequestException('Usuário não encontrado');
        }

        // if (!validateCNPJ(cnpj)) {
        //     throw new BadRequestException('CNPJ inválido');
        // }

        const validate = await this.validateUserCreateCompany(company);
        if(!validate){
            throw new BadRequestException('Já existe uma empresa cadastrada com este CNPJ');
        }

        return await this.companyRepository.create(company);
    }

    async validateUserCreateCompany(company: CompanyEntityInterface): Promise<boolean> {
        const companies = await this.companyRepository.list();
        const existingCompany = companies.find(c => c.cnpj === company.cnpj);
        if(existingCompany){
            return false;
        }
        return true;
    }
}