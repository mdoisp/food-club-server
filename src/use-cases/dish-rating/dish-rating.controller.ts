import { Body, Controller, Get, Param, Post, Res, Put, Delete } from "@nestjs/common";
import { Response } from "express";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { GetListByDishService } from "./services/list-bydish.service";
import { CreateDishRatingService } from "./services/create-dish-rating.service";
import { GetByDishAndUserService } from "./services/get-bydish-and-user.service";
import { UpdateDishRatingService } from "./services/update-dish-rating.service";
import { DeleteDishRatingService } from "./services/delete-dish-rating.service";
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ListDishAverageRatingDtoResponse } from 'src/interfaces/http/dtos/response/listDishAverageRatingDtoResponse';
import { CreateDishRatingDto } from 'src/interfaces/http/dtos/request/createDishRatingDto';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';

@ApiTags('Dish Rating API')
@Controller('dish-rating')
export class DishRatingControlller {
    constructor(
        private readonly getListByDish: GetListByDishService,
        private readonly createDishRatingService: CreateDishRatingService,
        private readonly getByDishAndUserService: GetByDishAndUserService,
        private readonly updateDishRatingService: UpdateDishRatingService,
        private readonly deleteDishRatingService: DeleteDishRatingService
    ) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Consulta realizada com sucesso',
        isArray: true,
        type: ListDishAverageRatingDtoResponse,
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
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
    @ApiParam({
        name: 'dishId',
        description: 'ID do prato',
    })
    @ApiParam({
        name: 'userId',
        description: 'ID do usuário',
    })
    @ApiResponse({
        status: 200,
        description: 'Consulta realizada com sucesso',
        type: ListDishAverageRatingDtoResponse,
    })
    @ApiResponse({
        status: 404,
        description: 'Avaliação do usuário do prato não encontrada',
        type: Http404,
    })
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
    @ApiBody({
        description: 'Dados da avaliação a serem criados',
        type: CreateDishRatingDto,
    })
    @ApiResponse({
        status: 201,
        description: 'Avaliação criada com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao criar avaliação',
        type: Http400,
    })
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
    
    @Put(":id")
    @ApiParam({
        name: 'id',
        description: 'ID da avaliação',
    })
    @ApiBody({
        description: 'Dados para atualizar a avaliação',
        type: CreateDishRatingDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Avaliação atualizada com sucesso',
        type: ListDishAverageRatingDtoResponse,
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao atualizar avaliação',
        type: Http400,
    })
    async update(
        @Param("id") id: string,
        @Body() ratingData: Partial<DishRatingEntityInterface>,
        @Res() res: Response
    ) {
        try {
            const updated = await this.updateDishRatingService.execute(Number(id), ratingData);
            res.status(200).json(updated);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    @Delete(":id")
    @ApiParam({
        name: 'id',
        description: 'ID da avaliação',
    })
    @ApiResponse({
        status: 204,
        description: 'Avaliação deletada com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao deletar avaliação',
        type: Http400,
    })
    async delete(@Param("id") id: string, @Res() res: Response) {
        try {
            await this.deleteDishRatingService.execute(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}