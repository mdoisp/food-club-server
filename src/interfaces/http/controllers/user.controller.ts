import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { CreateUserService } from "../../../application/use-cases/create-user.service";
import { DeleteUserService } from "../../../application/use-cases/delete-user.service";
import { GetUserByIdService } from "../../../application/use-cases/get-user-byid.service";
import { ListUsersService } from "../../../application/use-cases/list-users.service";
import { UpdateUserService } from "../../../application/use-cases/update-user.service";
import { Response } from "express";
import { ApiBody, ApiParam, ApiResponse, ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { ListUserDtoResponse } from "src/interfaces/http/dtos/response/listUserDtoResponse";
import { CreateUserDto } from "src/interfaces/http/dtos/request/createUserDto";
import { Http400 } from "src/interfaces/http/dtos/response/http400";
import { Http404 } from "src/interfaces/http/dtos/response/http404";
import { UserInterface } from "src/domain/models/user.interface";
import { LoginDto } from "src/interfaces/http/dtos/request/loginDto";
import { LoginResponseDto } from "src/interfaces/http/dtos/response/loginDtoResponse";
import { AuthService } from "../../../application/use-cases/login.service";
import { JwtAuthGuard } from "../../../infrastructure/guards/jwt-auth.guard";
import { GetUserByEmailService } from "../../../application/use-cases/get-byemail.service";

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
        private readonly getUserByEmailService: GetUserByEmailService,
    ) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiResponse({
        status: 200,
        description: 'Lista de usuários retornada com sucesso',
        type: [ListUserDtoResponse],
    })
    @ApiResponse({
        status: 401,
        description: 'Não autorizado',
    })
    async list(): Promise<UserInterface[]> {
        return await this.listUsersService.execute();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiParam({
        name: 'id',
        required: true,
        description: 'ID do usuário',
        schema: { type: 'number' },
    })
    @ApiResponse({
        status: 200,
        description: 'Usuário encontrado com sucesso',
        type: ListUserDtoResponse,
    })
    @ApiResponse({
        status: 404,
        description: 'Usuário não encontrado',
        type: Http404,
    })
    @ApiResponse({
        status: 401,
        description: 'Não autorizado',
    })
    async getById(@Param('id') id: number): Promise<UserInterface> {
        return await this.getUserByIdService.execute(id);
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
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiParam({
        name: 'id',
        required: true,
        description: 'ID do usuário',
        schema: { type: 'number' },
    })
    @ApiBody({
        description: 'Dados do usuário',
        type: CreateUserDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Usuário atualizado com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Usuário não encontrado',
        type: Http404,
    })
    @ApiResponse({
        status: 401,
        description: 'Não autorizado',
    })
    async update(@Param('id') id: number, @Body() user: UserInterface): Promise<void> {
        await this.updateUserService.execute(id, user);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiParam({
        name: 'id',
        required: true,
        description: 'ID do usuário',
        schema: { type: 'number' },
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
    @ApiResponse({
        status: 401,
        description: 'Não autorizado',
    })
    async delete(@Param('id') id: number): Promise<void> {
        await this.deleteUserService.execute(id);
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
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Realizar logout', description: 'Invalida o token JWT atual' })
    @ApiResponse({ 
        status: 200, 
        description: 'Logout realizado com sucesso' 
    })
    @ApiResponse({
        status: 401,
        description: 'Não autorizado',
    })
    async logout(@Body() body: { token: string }) {
        this.authService.logout(body.token);
        return { message: 'Logout realizado com sucesso' };
    }

    @Get('check-email/:email')
    @ApiOperation({ summary: 'Verificar se o email já existe', description: 'Verifica se o email já está cadastrado no sistema.' })
    @ApiParam({
        name: 'email',
        required: true,
        description: 'Email a ser verificado',
        schema: { type: 'string', example: 'teste@email.com' },
    })
    @ApiResponse({
        status: 200,
        description: 'Retorna se o email já está cadastrado',
        schema: {
            example: { exists: true }
        }
    })
    async checkEmail(@Param('email') email: string) {
        const user = await this.getUserByEmailService.execute(email);
        return { exists: !!user };
    }
}