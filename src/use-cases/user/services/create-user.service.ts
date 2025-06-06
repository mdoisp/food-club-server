import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { UserInterface } from '../user.interface';
import { AuthService } from './login.service';

@Injectable()
export class CreateUserService {
    constructor(
        private userRepository: UserRepository,
        private authService: AuthService,
    ) {}

    async execute(data: UserInterface): Promise<UserInterface> {
        // Hash da senha antes de salvar
        data.password = await this.authService.hashPassword(data.password);
        return this.userRepository.create(data);
    }
}