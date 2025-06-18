import { ApiProperty } from "@nestjs/swagger";
import { CompanyEntityInterface } from "src/domain/repositories/company.interface";
import { DishRatingEntityInterface } from "src/domain/repositories/dish-rating.interface";
import { ListDishRatingUserResponse } from "./listDishRatingUserResponse";

export class ListDishDtoResponse {
    @ApiProperty({
        type: 'number',
        description: 'ID do restaurante',
        example: 1,
    })
    restaurantId: number;

    @ApiProperty({
        type: 'string',
        description: 'Nome do prato',
        example: 'Spaghetti Carbonara',
    })
    name: string;

    @ApiProperty({
        type: 'string',
        description: 'Descrição do prato',
        example: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    })
    description: string;

    @ApiProperty({
        type: 'number',
        description: 'Preço do prato',
        example: 12.99,
    })
    price: number;

    @ApiProperty({
        type: 'string',
        description: 'URL da imagem do prato',
        example: null,
        nullable: true,
    })
    image: string | null;

    @ApiProperty({
        type: 'number',
        description: 'Média de avaliações do prato',
        example: 4.5,
    })
    averageRating: number;

    @ApiProperty({
        type: 'number',
        description: 'Quantidade de avaliações do prato',
        example: 10,
    })
    ratingCount: number;

    @ApiProperty({
        description: 'Avaliações do prato',
        type: [Object],
        required: false,
      })
      ratings?: ListDishRatingUserResponse[];

   }