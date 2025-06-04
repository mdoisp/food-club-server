import { ApiProperty } from "@nestjs/swagger";
import { DishInterface } from "src/use-cases/dish/dish.interface";

export class CreateRestaurantDto {
    @ApiProperty({
        description: 'ID do usuário que está criando o restaurante',
        type: Number,
        example: 1,
    })
    userId: number;

    @ApiProperty({
        description: 'Nome do restaurante',
        type: String,
        example: 'Restaurante Exemplo',
    })
    name: string;

    @ApiProperty({
        description: 'CNPJ do restaurante',
        type: String,
        example: '12.345.678/0001-90',
    })
    cnpj: string;

    @ApiProperty({
        description: 'CEP do restaurante',
        type: String,
        example: '12345-678',
    })
    cep: string;

    @ApiProperty({
        description: 'Número do restaurante',
        type: String,
        example: '123',
    })
    number: string;
}