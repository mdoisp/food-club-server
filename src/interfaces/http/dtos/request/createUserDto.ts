import { ApiProperty } from "@nestjs/swagger";
import { UserType } from "src/database/interfaces/user.interface";

export class CreateUserDto {
    @ApiProperty({
        description: 'ID do usuário',
        type: UserType,
        example: 'employee',
        enum: UserType,
        enumName: 'UserType',
    })
    userType: UserType;

    @ApiProperty({
        type: 'string',
        description: 'Senha do usuário',
        example: 'password123'
    })
    password: string;

    @ApiProperty({
        description: 'Email do usuário',
        type: String,
        example: 'admin@tech.com',
    })
    email: string;
}