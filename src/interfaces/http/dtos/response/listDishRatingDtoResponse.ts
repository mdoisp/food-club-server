import { DishRatingEntityInterface } from '../../../../database/interfaces/dish-rating.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ListDishRatingDtoResponse {
  @ApiProperty({
    description: 'ID do restaurante',
    example: 1,
  })
  restaurantId: number;

  @ApiProperty({
    description: 'Nome do prato',
    example: 'X-Burger',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição do prato',
    example: 'Hambúrguer artesanal com queijo, alface, tomate e molho especial',
  })
  description: string;

  @ApiProperty({
    description: 'Preço do prato',
    example: 25.90,
  })
  price: number;

  @ApiProperty({
    description: 'URL da imagem do prato',
    example: 'https://exemplo.com/imagem.jpg',
    required: false,
  })
  image?: string;

  @ApiProperty({
    description: 'Avaliações do prato',
    type: [Object],
    required: false,
  })
  ratings?: DishRatingEntityInterface[];
} 