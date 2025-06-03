import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { GetListByDish } from "./services/list-bydish.service";

@Controller('dish-rating')
export class DishRatingControlller {
    constructor(private readonly getListByDish: GetListByDish) {}

    @Get()
    async listByDish(@Param('id') id: string, @Res() res: Response): Promise<DishRatingEntityInterface>{
         const dishRating = await this.getListByDish.execute(Number(id));
    if (!dishRating) {
      res.status(404).json({
        success: false,
        message: 'Empresa não encontrada',
      });
      return;
    }

    res.status(200).json(dishRating);
    }
    
}