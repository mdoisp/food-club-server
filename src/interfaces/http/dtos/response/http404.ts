import { ApiProperty } from '@nestjs/swagger';

export class Http404 {
  @ApiProperty({
    example: false,
  })
  success: boolean;

  @ApiProperty({
    example: 'Recurso não encontrado',
  })
  message: string;
}