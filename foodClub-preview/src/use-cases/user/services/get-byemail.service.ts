import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/database/repositories/user.repository";

@Injectable()
export class GetUserByEmailService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(email: string): Promise<any> {
        const user = await this.userRepository.findByEmail(email);
        return user;
    }
}