import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'usuario@exemplo.com' })
  email: string;

  @ApiProperty({ example: 'senhaSegura123' })
  password: string;
}