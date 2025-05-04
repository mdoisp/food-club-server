import { CompanyEntity } from "../entities/company.entity";

export const companyProvider = [{
    provide: 'COMPANY_ENTITY',
    useValue: CompanyEntity
}]