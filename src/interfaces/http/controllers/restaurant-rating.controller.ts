import { Body, Controller, Get, Param, Post, Res, Put, Delete } from "@nestjs/common";
import { Response } from "express";
import { RestaurantRatingEntityInterface } from "src/domain/repositories/restaurant-rating.interface";
import { GetListByRestaurantService } from "../../../application/use-cases/list-byrestaurant.service";
import { CreateRestaurantRatingService } from "../../../application/use-cases/create-restaurant-rating.service";
import { GetByRestaurantAndUserService } from "../../../application/use-cases/get-byrestaurant-and-user.service";
import { UpdateRestaurantRatingService } from "../../../application/use-cases/update-restaurant-rating.service";
import { DeleteRestaurantRatingService } from "../../../application/use-cases/delete-restaurant-rating.service";
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ListRestaurantAverageRatingDtoResponse } from "../dtos/response/listRestaurantAverageRatingDtoResponse";
import { CreateRestaurantRatingDto } from "../dtos/request/createRestaurantRatingDto";

@ApiTags('Restaurant Rating API')
@Controller('restaurant-rating')
export class RestaurantRatingController {
    constructor(
        private readonly getListByRestaurant: GetListByRestaurantService,
        private readonly createRestaurantRatingService: CreateRestaurantRatingService,
        private readonly getByRestaurantAndUserService: GetByRestaurantAndUserService,
        private readonly updateRestaurantRatingService: UpdateRestaurantRatingService,
        private readonly deleteRestaurantRatingService: DeleteRestaurantRatingService
    ) {}

    @Get(':restaurantId')
    @ApiParam({
        name: 'restaurantId',
        description: 'ID do restaurante',

    })
    @ApiResponse({
        status: 200,
        description: 'Consulta realizada com sucesso',
        isArray: true,
        type: ListRestaurantAverageRatingDtoResponse,
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    async listByRestaurant(@Param('restaurantId') restaurantId: string, @Res() res: Response): Promise<RestaurantRatingEntityInterface[]> {
        const restaurantRating = await this.getListByRestaurant.execute(Number(restaurantId));
        if (!restaurantRating) {
            res.status(404).json({
                success: false,
                message: 'Avaliação do restaurante não encontrada',
            });
            return;
        }
        res.status(200).json(restaurantRating);
    }

    @Get(':restaurantId/:userId')
    @ApiParam({
        name: 'restaurantId',
        description: 'ID do restaurante',
        type: ListRestaurantAverageRatingDtoResponse,
    })
    @ApiParam({
        name: 'userId',
        description: 'ID do usuário',
    })
    @ApiResponse({
        status: 200,
        description: 'Consulta realizada com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Avaliação do usuário do restaurante não encontrada',
    })
    async getRatingByRestaurantAndUser(
        @Param('restaurantId') restaurantId: string, 
        @Param('userId') userId: string,
        @Res() res: Response){
            const restaurantRating = await this.getByRestaurantAndUserService.execute(Number(restaurantId), Number(userId));
        if (!restaurantRating) {
            res.status(404).json({
                success: false,
                message: 'Avaliação do usuário do restaurante não encontrada',
            });
            return;
        }
        res.status(200).json(restaurantRating);
    }

    @Post()
    @ApiBody({
        description: 'Dados da avaliação a serem criados',
        type: CreateRestaurantRatingDto,
    })
    @ApiResponse({
        status: 201,
        description: 'Avaliação criada com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao criar avaliação',
    })
    async create(@Body() restaurantRating: RestaurantRatingEntityInterface, @Res() res: Response){
        const { restaurantId, userId, rating, description } = restaurantRating;
        if(!(restaurantId && userId && rating && description)){
            res.status(400).json({
                sucess: false,
                message: 'Todos os campos são obrigatórios'
            });
            return;
        }
        await this.createRestaurantRatingService.execute(restaurantRating);
        res.status(201).send();
    }
    
    @Put(":id")
    @ApiParam({
        name: 'id',
        description: 'ID da avaliação',
        type: CreateRestaurantRatingDto,
    })
    @ApiBody({
        description: 'Dados para atualizar a avaliação',
        type: CreateRestaurantRatingDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Avaliação atualizada com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao atualizar avaliação',
    })
    async update(
        @Param("id") id: string,
        @Body() ratingData: Partial<RestaurantRatingEntityInterface>,
        @Res() res: Response
    ) {
        try {
            const updated = await this.updateRestaurantRatingService.execute(Number(id), ratingData);
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
    })
    async delete(@Param("id") id: string, @Res() res: Response) {
        try {
            await this.deleteRestaurantRatingService.execute(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
} 