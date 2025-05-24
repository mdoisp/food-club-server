import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetCompanyByIdService } from './services/get-company-byid.service'
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { Response } from 'express';
import { CompanyInterface } from './company.interface';
import { CompanyEntityInterface } from 'src/database/interfaces/company.interface';
import { ListCompaniesService } from './services/list-companies.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListCompanyDtoResponse } from 'src/interfaces/http/dtos/response/listCompanyDtoResponse';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';
import { CreateCompanyDto } from 'src/interfaces/http/dtos/request/createCompanyDto';

@ApiTags('Company API')
@Controller('company')
export class CompanyController {
  constructor(
    private readonly listCompaniesService: ListCompaniesService,
    private getCompanyByIdService: GetCompanyByIdService,
    private createCompanyService: CreateCompanyService,
    private updateCompanyService: UpdateCompanyService,
    private deleteCompanyService: DeleteCompanyService
  ) {}

   @Get()
   @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    isArray: true,
    type: ListCompanyDtoResponse,
   })
    @ApiResponse({
      status: 500,
      description: 'Erro interno do servidor',
    })
    async list(): Promise<ListCompanyDtoResponse[]> {
      const employeeList = await this.listCompaniesService.execute();
      return employeeList;
    }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID da empresa',
  })
  @ApiResponse({
    status: 200,
    description: 'Empresa encontrada',
    type: ListCompanyDtoResponse,
   })
  @ApiResponse({
    status: 404,
    description: 'Empresa não encontrada',
    type: Http404,
  })
  async getById(@Param('id') id: string, @Res() res: Response,): Promise<ListCompanyDtoResponse> {
    const company = await this.getCompanyByIdService.execute(Number(id));
    if (!company) {
      res.status(404).json({
        success: false,
        message: 'Empresa não encontrada',
      });
      return;
    }

    res.status(200).json(company);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({
    description: 'Dados da empresa a serem criados',
    type: CreateCompanyDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Empresa criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar empresa',
    type: Http400,
  })
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