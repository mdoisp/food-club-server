import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { CompanyEntityInterface } from "../../domain/repositories/company.interface";
import { CompanyRepository } from '../../infrastructure/database/repositories/company.repository';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { validateCNPJ } from '../../use-cases/company/utils/cnpj-validator';

@Injectable()
export class CreateCompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository,
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(company: Omit<CompanyEntityInterface, 'id'>): Promise<CompanyEntityInterface> {
        const { userId, cnpj } = company;
        
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new BadRequestException('Usuário não encontrado');
        }

        if (!validateCNPJ(cnpj)) {
            throw new BadRequestException('CNPJ inválido');
        }

        const existingCompany = await this.companyRepository.findByCnpj(cnpj);
        if (existingCompany) {
            throw new BadRequestException('Já existe uma empresa cadastrada com este CNPJ');
        }

        return await this.companyRepository.create(company);
    }
}