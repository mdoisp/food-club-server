import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from "@nestjs/common";
import { CreateUserService } from "./services/create-user.service";
import { DeleteUserService } from "./services/delete-user.service";
import { GetUserByIdService } from "./services/get-user-byid.service";
import { ListUsersService } from "./services/list-users.service";
import { UpdateUserService } from "./services/update-user.service";
import { UserInterface } from "./user.interface";
import { Response } from "express";

@Controller('user')
export class UserController {
    constructor(
        private readonly createUserService: CreateUserService,
        private readonly getUserByIdService: GetUserByIdService,
        private readonly listUsersService: ListUsersService,
        private readonly updateUserService: UpdateUserService,
        private readonly deleteUserService: DeleteUserService
    ) {}
    @Get()
    async list(): Promise<UserInterface[]> {
        const userList = await this.listUsersService.execute();
        return userList;
    }
    @Get(':id')
    async getById(@Param('id') id: string): Promise<UserInterface> {
        const user = await this.getUserByIdService.execute(Number(id));
        return user;
    }
    @Post()
    @HttpCode(201)
    async create(@Body() user: UserInterface,@Res() res: Response): Promise<void> {
        const { user_type, email, password } = user;
        if (!(user_type && email && password)) {
            throw new Error('Todos os campos são obrigatórios');
        }
        await this.createUserService.execute(user);
        res.send();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Param() userData: UserInterface): Promise<UserInterface> {
        const user = await this.updateUserService.execute(Number(id), userData);
        return user;
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deleteUserService.execute(Number(id));
    }
}