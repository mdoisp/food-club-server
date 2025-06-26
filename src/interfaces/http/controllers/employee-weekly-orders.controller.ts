import { Controller, Post, Get, Delete, Body, Param, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateEmployeeWeeklyOrderDto } from 'src/interfaces/http/dtos/request/createEmployeeWeeklyOrder.dto';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrder.dto';
import { CreateOrUpdateWeeklyOrderService } from '../../../application/use-cases/create-or-update-weekly-order.use-cases'; 
import { GetWeeklyOrdersByEmployeeService } from '../../../application/use-cases/get-weekly-orders-by-employee.use-cases';
import { DeleteWeeklyOrderService } from '../../../application/use-cases/delete-weekly-order.use-cases';
import { EmployeeWeeklyOrdersEntityInterface } from 'src/domain/repositories/employee-weekly-orders.repository.interface';
import { OrderItemEntityInterface } from 'src/domain/repositories/order-item.repository.interface';
import logger from 'src/infrastructure/utils/logger';
import { Response } from 'express';

@ApiTags('Pedidos Semanais dos Funcionários')
@Controller('employee-weekly-orders')
export class EmployeeWeeklyOrdersController {
  constructor(
    private readonly createOrUpdateWeeklyOrderService: CreateOrUpdateWeeklyOrderService,
    private readonly getWeeklyOrdersByEmployeeService: GetWeeklyOrdersByEmployeeService,
    private readonly deleteWeeklyOrderService: DeleteWeeklyOrderService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    description: 'Dados do pedido semanal a serem criados',
    type: CreateEmployeeWeeklyOrderDto,
  })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Pedido semanal criado/atualizado com sucesso',
    type: CreateEmployeeWeeklyOrderDto
  })
  async createOrUpdateWeeklyOrder(
    @Body() employeeWeeklyOrder: EmployeeWeeklyOrdersEntityInterface
  ): Promise<EmployeeWeeklyOrdersEntityInterface> {
    logger.info(`Requisição recebida: Criar pedido semanal de funcionário - Dados: ${JSON.stringify(employeeWeeklyOrder)}`);
    return await this.createOrUpdateWeeklyOrderService.execute(employeeWeeklyOrder);
  }

  @Get('employee/:employeeId')
  @ApiOperation({ summary: 'Buscar pedidos semanais por funcionário' })
  @ApiParam({ name: 'employeeId', description: 'ID do funcionário' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de pedidos semanais do funcionário',
    type: [EmployeeWeeklyOrderResponse] 
  })
  async getWeeklyOrdersByEmployee(
    @Param('employeeId') employeeId: number,
  ): Promise<EmployeeWeeklyOrderResponse[]> {
    logger.info(`Requisição recebida: Buscar pedidos semanais de funcionário - ID: ${employeeId}`);
    return await this.getWeeklyOrdersByEmployeeService.execute(employeeId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Excluir pedido semanal' })
  @ApiParam({ name: 'id', description: 'ID do pedido semanal' })
  @ApiResponse({ 
    status: HttpStatus.NO_CONTENT, 
    description: 'Pedido semanal excluído com sucesso' 
  })
  async deleteWeeklyOrder(@Param('id') id: number): Promise<void> {
    logger.info(`Requisição recebida: Excluir pedido semanal - ID: ${id}`);
    await this.deleteWeeklyOrderService.execute(id);
  }
} 