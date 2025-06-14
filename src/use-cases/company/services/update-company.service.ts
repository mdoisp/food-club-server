import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';
import { UserRepository } from 'src/database/repositories/user.repository';

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

        return await this.companyRepository.update(id, companyData);
    }
}