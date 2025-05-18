import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetCompanyByIdService } from './services/get-company-byid.service'
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { Response } from 'express';
import { CompanyInterface } from './company.interface';
import { CompanyEntityInterface } from 'src/database/interfaces/company.interface';
import { ListCompaniesService } from './services/list-companies.service';

@Controller('Company')
export class CompanyController {
  constructor(
    private readonly listCompaniesService: ListCompaniesService,
    private getCompanyByIdService: GetCompanyByIdService,
    private createCompanyService: CreateCompanyService,
    private updateCompanyService: UpdateCompanyService,
    private deleteCompanyService: DeleteCompanyService
  ) {}

   @Get()
    async list(): Promise<CompanyEntityInterface[]> {
      const employeeList = await this.listCompaniesService.execute();
  
      return employeeList;
    }

  @Get(':id')
  getById(@Param('id') id: string): Promise<CompanyInterface> {
    const product = this.getCompanyByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() company: CompanyInterface, @Res() res: Response) {
    const { company_name, zip_code, street, number, city } = company;
    if(!(company_name && zip_code && street && number && city)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createCompanyService.execute(company);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() companyData: CompanyInterface): Promise<CompanyInterface> {
    return this.updateCompanyService.execute(Number(id), companyData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteCompanyService.execute(Number(id));
  }
}