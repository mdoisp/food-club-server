import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetDishByIdService } from './services/get-dish-byid.service';
import { DishInterface } from './dish.interface';
import { CreateDishService } from './services/create-dish.service';
import { UpdateDishService } from './services/update-dish.service';
import { DeleteDishService } from './services/delete-dish.service';
import { Response } from 'express';
import { DishEntityInterface } from 'src/database/interfaces/dish.interface';
import { ListDishesService } from './services/list-dishes.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListDishDtoResponse } from 'src/interfaces/http/dtos/response/listDishDtoResponse';

@ApiTags('Dish API')
@Controller('Dish')
export class DishController {
  constructor(
    private listDishesService: ListDishesService,
    private getDishByIdService: GetDishByIdService,
    private createDishService: CreateDishService,
    private updateDishService: UpdateDishService,
    private deleteDishService: DeleteDishService
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    isArray: true,
    type: ListDishDtoResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  async list(): Promise<DishEntityInterface[]> {
    const dishList = await this.listDishesService.execute();

    return dishList;
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<DishInterface> {
    const dish = this.getDishByIdService.execute(Number(id));

    return dish;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() dish: DishInterface, @Res() res: Response) {
    const { dish_name, price, dish_description } = dish;
    if(!(dish_name && price && dish_description)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createDishService.execute(dish);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dishData: DishInterface): Promise<DishInterface> {
    return this.updateDishService.execute(Number(id), dishData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteDishService.execute(Number(id));
  }
}