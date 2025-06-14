import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';
import { UserRepository } from 'src/database/repositories/user.repository';
import { validateCNPJ } from '../utils/cnpj-validator';

@Injectable()
export class UpdateCompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository,
        private readonly userRepository: UserRepository
    ) {}

    async execute(
        id: number,
        companyData: Partial<Omit<CompanyEntityInterface, 'id'>>
    ): Promise<CompanyEntityInterface> {
        if (companyData.userId) {
            const user = await this.userRepository.getById(companyData.userId);
            if (!user) {
                throw new BadRequestException('Usuário não encontrado');
            }
        }

        if (companyData.cnpj) {
            if (!validateCNPJ(companyData.cnpj)) {
                throw new BadRequestException('CNPJ inválido');
            }

            const existingCompany = await this.companyRepository.findByCnpj(companyData.cnpj);
            if (existingCompany && existingCompany.id !== id) {
                throw new BadRequestException('Já existe uma empresa cadastrada com este CNPJ');
            }
        }

        return await this.companyRepository.update(id, companyData);
    }
}