import { ApiProperty } from '@nestjs/swagger';

export class Http400 {
  @ApiProperty({
    example: false,
  })
  success: boolean;

  @ApiProperty({
    example: 'Mensagem de erro',
  })
  message: string;
}
