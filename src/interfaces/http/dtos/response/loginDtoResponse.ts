import { ApiProperty } from '@nestjs/swagger';
import { UserInterface } from 'src/use-cases/user/user.interface';

export class LoginResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  token: string;

  @ApiProperty({
    type: 'object',
    additionalProperties: true,
    example: {
      id: 1,
      email: 'usuario@exemplo.com',
      userType: 'company',
      company: {
        // detalhes da empresa
      }
    }
  })
  userDetails: UserInterface;
}