import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
    @ApiProperty({
        description: 'ID do usuário associado ao funcionário',
        example: 1,
    })
    userId: number;

    @ApiProperty({
        description: 'ID da empresa associada ao funcionário',
        example: 1,
    })
    companyId: number;

    @ApiProperty({
        description: 'Nome do funcionário',
        example: 'João da Silva',
    })
    name: string;

    @ApiProperty({
        description: 'CPF do funcionário',
        example: '123.456.789-00',
    })
    cpf: string;

    @ApiProperty({
        description: 'Data de nascimento do funcionário',
        example: '1990-01-01',
        type: String,
    })
    birthDate: Date;
}