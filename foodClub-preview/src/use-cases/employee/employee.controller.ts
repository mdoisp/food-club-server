import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetEmployeeByIdService } from './services/get-employee-byid.service';
import { EmployeeInterface } from './employee.interface';
import { CreateEmployeeService } from './services/create-employee.service';
import { UpdateEmployeeService } from './services/update-employee.service';
import { DeleteEmployeeService } from './services/delete-employee.service';
import { Response } from 'express';
import { EmployeeEntityInterface } from 'src/database/interfaces/employee.interface';
import { ListEmployeesService } from './services/list-employees.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly listemployeesService: ListEmployeesService,
    private readonly getemployeeByIdService: GetEmployeeByIdService,
    private readonly createemployeeService: CreateEmployeeService,
    private readonly updateemployeeService: UpdateEmployeeService,
    private readonly deleteemployeeService: DeleteEmployeeService
  ) {}

  @Get()
  async list(): Promise<EmployeeEntityInterface[]> {
    const employeeList = await this.listemployeesService.execute();

    return employeeList;
  }

  @Get(':id')
  getById(@Param('id') id: string): EmployeeInterface {
    const employee = this.getemployeeByIdService.execute(Number(id));

    return employee;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() employee: EmployeeInterface, @Res() res: Response) {
    const { name, email, companyId, position, department } = employee;
    if(!(name && email && companyId && position && department)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createemployeeService.execute(employee);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employeeData: EmployeeInterface): EmployeeInterface {
    return this.updateemployeeService.execute(Number(id), employeeData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteemployeeService.execute(Number(id));
  }
}