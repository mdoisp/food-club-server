import { Inject, Injectable } from '@nestjs/common';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyEntityInterface } from '../interfaces/company.interface';

@Injectable()
export class CompanyRepository {
  constructor(
    @Inject('COMPANY_ENTITY')
    private readonly companyEntity: typeof CompanyEntity,
  ) {}

  async create(company: Omit<CompanyEntityInterface, 'id'>): Promise<CompanyEntityInterface> {
    return await this.companyEntity.create(company);
  }

  async update(
    id: number,
    companyData: Partial<Omit<CompanyEntityInterface, 'id'>>,
  ): Promise<CompanyEntityInterface> {
    const company = await this.companyEntity.findByPk(id);
    if (!company) throw new Error('Empresa não encontrada!');
    return await company.update(companyData);
  }

  async getById(id: number): Promise<CompanyEntityInterface> {
    const company = await this.companyEntity.findByPk(id);
    if (!company) throw new Error('Empresa não encontrada!');
    return company;
  }

  async list(): Promise<CompanyEntityInterface[]> {
    return await this.companyEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const company = await this.companyEntity.findByPk(id);
    if (!company) throw new Error('Empresa não encontrada!');
    await company.destroy();
  }
}

// import { Inject, Injectable } from '@nestjs/common';
// import { CompanyEntity } from '../entities/company.entity';
// import { CompanyEntityInterface } from '../interfaces/company.interface';
// import { CompanyInterface } from 'src/use-cases/company/company.interface';

// @Injectable()
// export class CompanyRepository {
//   constructor(
//     @Inject('COMPANY_ENTITY')
//     private readonly companyEntity: typeof CompanyEntity,
//   ) {}

//   async create(company: Omit<CompanyEntityInterface, 'idEmpresa'>): Promise<CompanyEntityInterface> {
//     return await this.companyEntity.create(company);
//   }

//   async update(
//     id: number,
//     companyData: Partial<Omit<CompanyEntityInterface, 'idEmpresa'>>,
//   ): Promise<CompanyEntityInterface> {
//     const company = await this.companyEntity.findByPk(id);
//     if (!company) throw new Error('Empresa não encontrada!');
    
//     return await company.update(companyData);
//   }

//   async getById(id: number): Promise<CompanyEntityInterface> {
//     const company = await this.companyEntity.findByPk(id);
//     if (!company) throw new Error('Empresa não encontrada!');
//     return company;
//   }

//   async list(): Promise<CompanyEntityInterface[]> {
//     return await this.companyEntity.findAll();
//   }

//   async delete(id: number): Promise<void> {
//     const company = await this.companyEntity.findByPk(id);
//     if (!company) throw new Error('Empresa não encontrada!');
//     await company.destroy();
//   }
// }