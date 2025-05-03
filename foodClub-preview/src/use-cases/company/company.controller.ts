import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetCompanyByIdService } from './services/get-company-byyd.service'
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { Response } from 'express';
import { CompanyInterface } from './company.interface';

@Controller('Company')
export class CompanyController {
  constructor(
    private getCompanyByIdService: GetCompanyByIdService,
    private createCompanyService: CreateCompanyService,
    private updateCompanyService: UpdateCompanyService,
    private deleteCompanyService: DeleteCompanyService
  ) {}

  @Get(':id')
  getById(@Param('id') id: string): CompanyInterface {
    const product = this.getCompanyByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() company: CompanyInterface, @Res() res: Response) {
    const { nomeEmpresa,cep , numero, fone, email } = company;
    if(!(nomeEmpresa && cep && numero && fone && email)){
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
  update(@Param('id') id: string, @Body() companyData: CompanyInterface): CompanyInterface {
    return this.updateCompanyService.execute(Number(id), companyData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteCompanyService.execute(Number(id));
  }
}