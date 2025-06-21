import { ApiProperty } from '@nestjs/swagger';

export class ListDishAverageRatingDtoResponse {
  @ApiProperty({
    description: 'ID do prato',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome do prato',
    example: 'Prato X',
  })
  name: string;

  @ApiProperty({
    description: 'ID do restaurante',
    example: 1,
  })
  restaurantId: number;

  @ApiProperty({
    description: 'Preço do prato',
    example: 25.5,
  })
  price: number;

  @ApiProperty({
    description: 'Média das avaliações do prato',
    example: 4.5,
    nullable: true,
  })
  averageRating: number | null;
} 