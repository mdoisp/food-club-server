import { Inject, Injectable } from "@nestjs/common";
import { UserEntityInterface } from "../../domain/repositories/user.repository.interface";
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class GetUserByIdService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<UserEntityInterface> {
        return await this.userRepository.getById(id);
    }
}