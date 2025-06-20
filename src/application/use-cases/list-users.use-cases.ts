import { Inject, Injectable } from "@nestjs/common";
import { UserEntityInterface } from "../../domain/repositories/user.interface";
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class ListUsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(): Promise<UserEntityInterface[]> {
        return await this.userRepository.list();
    }
}