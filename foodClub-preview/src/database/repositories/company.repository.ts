import { Inject, Injectable } from '@nestjs/common';
import { CompanyInterface } from '../../use-cases/company/company.interface';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyEntityInterface } from '../entities/company.interface';

@Injectable()
export class CompanyRepository {
  private companies: CompanyInterface[] = [];

  constructor(
    @Inject('COMPANY_ENTITY')
    private companyEntity: typeof CompanyEntity,
  ) {}

  create(company: CompanyInterface): void {
    this.companies.push(company);
  }

  update(id: number, companyData: CompanyInterface): CompanyInterface {
    const index = this.companies.findIndex((company) => company.IdEmpresa === id);
    if (index === -1) throw new Error('Empresa não encontrada!');

    const updatedCompany = { ...companyData, id: this.companies[index].IdEmpresa };
    this.companies[index] = updatedCompany;
    return updatedCompany;
  }

  getById(id: number): CompanyInterface {
    const company = this.companies.find((company) => company.IdEmpresa === id);
    if (!company) throw new Error('Empresa não encontrada!');
    return company;
  }

  async list(): Promise<CompanyEntityInterface[]> {
    return await this.companyEntity.findAll();
  }

  delete(id: number): void {
    const index = this.companies.findIndex((company) => company.IdEmpresa === id);
    if (index === -1) throw new Error('Empresa não encontrada!');
    this.companies.splice(index, 1);
  }
}