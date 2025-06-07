import { ApiProperty } from '@nestjs/swagger';

export class ListDishAverageRatingDtoResponse {
  @ApiProperty({ example: 1, description: 'ID da avaliação' })
  id: number;

  @ApiProperty({ example: 1, description: 'ID do prato' })
  dishId: number;

  @ApiProperty({ example: 1, description: 'ID do usuário' })
  userId: number;

  @ApiProperty({ example: 5, description: 'Nota da avaliação (1 a 5)' })
  rating: number;
} 