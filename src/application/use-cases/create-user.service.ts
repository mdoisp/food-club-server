import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { UserInterface } from '../../domain/models/user.interface';
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