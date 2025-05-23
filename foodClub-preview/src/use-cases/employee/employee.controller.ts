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
    private readonly listEmployeesService: ListEmployeesService,
    private readonly getEmployeeByIdService: GetEmployeeByIdService,
    private readonly createEmployeeService: CreateEmployeeService,
    private readonly updateEmployeeService: UpdateEmployeeService,
    private readonly deleteEmployeeService: DeleteEmployeeService
  ) {}

  @Get()
  async list(): Promise<EmployeeEntityInterface[]> {
    const employeeList = await this.listEmployeesService.execute();

    return employeeList;
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<EmployeeInterface> {
    const employee = this.getEmployeeByIdService.execute(Number(id));

    return employee;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() employee: EmployeeInterface, @Res() res: Response) {
      const { employee_name, company_id } = employee;
      if(!(employee_name && company_id)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createEmployeeService.execute(employee);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employeeData: EmployeeInterface): Promise<EmployeeInterface> {
    return this.updateEmployeeService.execute(Number(id), employeeData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteEmployeeService.execute(Number(id));
  }
}