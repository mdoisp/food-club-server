import { ApiProperty } from "@nestjs/swagger";
import { UserType } from '../../../../use-cases/user/user.interface';

export class ListUserDtoResponse {
    @ApiProperty({
        type: 'number',
        description: 'ID do usuário',
        example: 1,
    })
  id: number;

    @ApiProperty({
        type: 'string',
        description: 'Email do usuário',
        example: 'admin@tech.com',
    })
  email: string;

    @ApiProperty({ enum: UserType })
  userType: UserType;
}