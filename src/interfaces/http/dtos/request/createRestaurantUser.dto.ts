import { ApiProperty } from "@nestjs/swagger";

export class CreateRestaurantUserDto {
    @ApiProperty({
        description: 'Tipo de usuário (deve ser "restaurant")',
        example: 'restaurant',
        enum: ['restaurant'],
    })
    userType: 'restaurant';

    @ApiProperty({
        type: 'string',
        description: 'Nome do restaurante',
        example: 'Restaurante Saboroso',
    })
    name: string;

    @ApiProperty({
        type: 'string',
        description: 'Email do restaurante',
        example: 'restaurante@email.com',
    })
    email: string;

    @ApiProperty({
        type: 'string',
        description: 'Senha do restaurante',
        example: 'senha123',
    })
    password: string;

    @ApiProperty({
        description: 'CNPJ do restaurante',
        type: String,
        example: '98765432000188',
    })
    cnpj: string;

    @ApiProperty({
        description: 'Dados específicos do restaurante',
        type: 'object',
        example: {
            name: "Restaurante Saboroso",
            cep: "87654321",
            number: "200"
        },
    })
    restaurant: {
        name: string;
        cep: string;
        number: string;
    };
} 