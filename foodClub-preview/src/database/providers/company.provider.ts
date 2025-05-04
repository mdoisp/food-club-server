import { CompanyEntity } from "../entities/company.entity";
import { CompanyRepository } from 'src/database/repositories/Company.repository';


export const companyProviders = [
  {
    provide: 'COMPANY_ENTITY',
    useValue: CompanyEntity
  },
  {
    provide: 'COMPANY_REPOSITORY', // Token de injeção
    useClass: CompanyRepository // Usa a classe diretamente
  }
];