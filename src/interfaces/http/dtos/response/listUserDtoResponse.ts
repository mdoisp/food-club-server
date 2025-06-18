import { ApiProperty } from "@nestjs/swagger";

export class ListUserDtoResponse {
    @ApiProperty({
        type: 'number',
        description: 'ID do usuário',
        example: 1,
    })
  id: number;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de usuário',
        example: 'admin',
    })
  user_type: string;

    @ApiProperty({
        type: 'string',
        description: 'Senha do usuário',
        example: 'password123',
    })
  password: string;

    @ApiProperty({
        type: 'string',
        description: 'Email do usuário',
        example: 'admin@tech.com',
    })
  email: string;
}

// funcionario
// {
//   "name": "João da Silva",
//   "email": "joao.silva@email.com",
//   "password": "senha123",
//   "userType": "employee",
//   "cpf": "12345678901",
//   "employee": {
//     "name": "João da Silva",
//     "birthDate": "1990-05-10"
//   },
//   "company": {
//     "id": 1
//   }
// }

// restaurante
// {
//   "name": "Restaurante Saboroso",
//   "email": "restaurante@email.com",
//   "password": "senha123",
//   "userType": "restaurant",
//   "cnpj": "98765432000188",
//   "restaurant": {
//     "name": "Restaurante Saboroso",
//     "cep": "87654321",
//     "number": "200"
//   }
// }

// empresa
// {
//   "name": "Restaurante Saboroso",
//   "email": "restaurante@email.com",
//   "password": "senha123",
//   "userType": "restaurant",
//   "cnpj": "98765432000188",
//   "restaurant": {
//     "name": "Restaurante Saboroso",
//     "cep": "87654321",
//     "number": "200"
//   }
// }