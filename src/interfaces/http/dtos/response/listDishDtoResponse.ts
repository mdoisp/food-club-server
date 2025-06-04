import { ApiProperty } from "@nestjs/swagger";
import { CompanyEntityInterface } from "src/database/interfaces/company.interface";

export class ListDishDtoResponse {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    restaurantId: number;

    @ApiProperty({
        type: 'string',
        description: 'Nome do prato',
        example: 'Pizza',
    })
    employee_name: string;

    @ApiProperty({
        type: 'string',
        description: 'Descrição do prato',
        example: 'Pizza de calabresa',
    })
    company_id?: CompanyEntityInterface;
}