import { Inject, Injectable, BadRequestException } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';
import { UserRepository } from 'src/database/repositories/user.repository';

@Injectable()
export class CreateCompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository,
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(company: Omit<CompanyEntityInterface, 'id'>): Promise<CompanyEntityInterface> {
        const { userId } = company;
        
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new BadRequestException('Usuário não encontrado');
        }

        return await this.companyRepository.create(company);
    }
}