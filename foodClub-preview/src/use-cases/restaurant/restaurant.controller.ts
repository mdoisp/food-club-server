import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetRestaurantByIdService } from './services/get-restaurant-byid.service'
import { CreateRestaurantService } from './services/create-restaurant.service';
import { UpdateRestaurantService } from './services/update-restaurant.service';
import { DeleteRestaurantService } from './services/delete-restaurant.service';
import { Response } from 'express';
import { RestaurantInterface } from './restaurant.interface';

@Controller('Restaurant')
export class RestaurantController {
  constructor(
    private getRestaurantByIdService: GetRestaurantByIdService,
    private createRestaurantService: CreateRestaurantService,
    private updateRestaurantService: UpdateRestaurantService,
    private deleteRestaurantService: DeleteRestaurantService
  ) {}

  @Get(':id')
  getById(@Param('id') id: string): RestaurantInterface {
    const product = this.getRestaurantByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() restaurant: RestaurantInterface, @Res() res: Response) {
    const { name, description, address, phone, email } = restaurant;
    if(!(name && description && address && phone && email)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createRestaurantService.execute(restaurant);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() restaurantData: RestaurantInterface): RestaurantInterface {
    return this.updateRestaurantService.execute(Number(id), restaurantData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteRestaurantService.execute(Number(id));
  }
}