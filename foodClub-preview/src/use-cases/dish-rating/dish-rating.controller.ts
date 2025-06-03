import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { GetListByDishService } from "./services/list-bydish.service";
import { CreateDishRatingService } from "./services/create-dish-rating.service";
import { GetByDishAndUserService } from "./services/get-bydish-and-user.service";

@Controller('dish-rating')
export class DishRatingControlller {
    constructor(
        private readonly getListByDish: GetListByDishService,
        private readonly createDishRatingService: CreateDishRatingService,
        private readonly getByDishAndUserService: GetByDishAndUserService
    ) {}

    @Get()
    async listByDish(@Param('id') id: string, @Res() res: Response): Promise<DishRatingEntityInterface>{
        const dishRating = await this.getListByDish.execute(Number(id));
        if (!dishRating) {
            res.status(404).json({
                success: false,
                message: 'Avaliação do prato não encontrada',
            });
            return;
        }
        res.status(200).json(dishRating);
    }

    @Get(':dishId/:userId')
    async getRatingByDishAndUser(
        @Param('dishId') dishId: string, 
        @Param('userId') userId: string,
        @Res() res: Response){
            const dishRating = await this.getByDishAndUserService.execute(Number(dishId), Number(userId));
        if (!dishRating) {
            res.status(404).json({
                success: false,
                message: 'Avaliação do usuário do prato não encontrada',
            });
            return;
        }
        res.status(200).json(dishRating);

    }

    @Post()
    creat(@Body() dishRating: DishRatingEntityInterface, @Res() res: Response){
        const { dishId, userId, rating } = dishRating;
        if(!(dishId && userId && rating)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createDishRatingService.execute(dishRating);
    res.send();
    }
    
}