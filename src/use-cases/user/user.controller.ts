import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { CreateUserService } from "./services/create-user.service";
import { DeleteUserService } from "./services/delete-user.service";
import { GetUserByIdService } from "./services/get-user-byid.service";
import { ListUsersService } from "./services/list-users.service";
import { UpdateUserService } from "./services/update-user.service";
import { Response } from "express";
import { ApiBody, ApiParam, ApiResponse, ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { ListUserDtoResponse } from "src/interfaces/http/dtos/response/listUserDtoResponse";
import { CreateUserDto } from "src/interfaces/http/dtos/request/createUserDto";
import { Http400 } from "src/interfaces/http/dtos/response/http400";
import { Http404 } from "src/interfaces/http/dtos/response/http404";
import { UserInterface } from "./user.interface";
import { LoginDto } from "src/interfaces/http/dtos/request/loginDto";
import { LoginResponseDto } from "src/interfaces/http/dtos/response/loginDtoResponse";
import { AuthService } from "./services/login.service";

@ApiTags('User API')
@Controller('user')
export class UserController {
    constructor(
        private readonly createUserService: CreateUserService,
        private readonly getUserByIdService: GetUserByIdService,
        private readonly listUsersService: ListUsersService,
        private readonly updateUserService: UpdateUserService,
        private readonly deleteUserService: DeleteUserService,
        private readonly authService: AuthService,
    ) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Consulta realizada com sucesso',
        isArray: true,
        type: ListUserDtoResponse,
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    async list(): Promise<UserInterface[]> {
        const userList = await this.listUsersService.execute();
        return userList;
    }
    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'ID do usuário',
    })
    @ApiResponse({
        status: 200,
        description: 'Usuário encontrado',
        type: ListUserDtoResponse,
    })
    @ApiResponse({
        status: 404,
        description: 'Usuário não encontrado',
        type: Http404,
    })
    async getById(@Param('id') id: string, @Res() res:Response): Promise<UserInterface> {
        const user = await this.getUserByIdService.execute(Number(id));
        if (!user) {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
      return;
    }
        res.status(200).json(user);
    }
    @Post()
    @HttpCode(201)
    @ApiBody({
        description: 'Dados do usuário',
        type: CreateUserDto,
    })
    @ApiResponse({
        status: 201,
        description: 'Usuário criado com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao criar usuário',
        type: Http400,
    })
    async create(@Body() user: UserInterface,@Res() res: Response): Promise<void> {
        const { email, password, userType} = user;
        if (!(email && password && userType)) {
            throw new Error('Todos os campos são obrigatórios');
        }
        await this.createUserService.execute(user);
        res.send();
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'ID do usuário',
    })
    @ApiBody({
        description: 'Dados do usuário a serem atualizados',
        type: CreateUserDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Usuário atualizado com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Erro ao atualizar usuário',
        type: Http400,
    })
    @ApiResponse({
        status: 404,
        description: 'Usuário não encontrado',
        type: Http404,
    })
    async update(@Param('id') id: string, @Body() userData: UserInterface, @Res() res: Response): Promise<UserInterface> {
        const expectedFields = ['userType', 'email', 'password'];
        const receivedFields = Object.keys(userData);
        const invalidFields = receivedFields.filter(field => !expectedFields.includes(field));
        const user = await this.updateUserService.execute(Number(id), userData);
        if(!user) {
            res.status(404).json({
                success: false,
                message: 'Usuário não encontrado',
            });
            return;
        }
        if (invalidFields.length > 0) {
            res.status(400).json({
                success: false,
                message: 'Campos inválidos',
            });
            return;
        }


        res.status(200).json(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Realizar login', description: 'Autentica um usuário e retorna um token JWT' })
    @ApiResponse({ 
        status: 200, 
        description: 'Login realizado com sucesso',
        type: LoginResponseDto 
    })
    @ApiResponse({ 
        status: 401, 
        description: 'Credenciais inválidas' 
    })
    async login(@Body() body: LoginDto) {
        const { token, userDetails } = await this.authService.login(body.email, body.password);
        return { token, userDetails };
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Realizar logout', description: 'Invalida o token JWT atual' })
    @ApiResponse({ 
        status: 200, 
        description: 'Logout realizado com sucesso' 
    })
    async logout(@Body() body: { token: string }) {
        this.authService.logout(body.token);
        return { message: 'Logout realizado com sucesso' };
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'ID do usuário',
    })
    @ApiResponse({
        status: 200,
        description: 'Usuário deletado com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Usuário não encontrado',
        type: Http404,
    })
    async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
        const user = await this.getUserByIdService.execute(Number(id));
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'Usuário não encontrado',
            });
            return;
        }
        this.deleteUserService.execute(Number(id));
        res.status(200).json({
            success: true,
            message: 'Usuário deletado com sucesso',
        });
    }
}