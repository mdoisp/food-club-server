import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../database/repositories/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepository
  ) {}

  async execute(id: number): Promise<boolean> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      return false;
    }
    await this.userRepository.delete(id);
    return true;
  }
}
