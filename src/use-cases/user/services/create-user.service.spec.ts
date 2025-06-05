import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './create-user.service';
import { UserRepository } from '../../../database/repositories/user.repository';
import { UserType } from '../user.interface';

describe('CreateUserService', () => {
  let service: CreateUserService;
  let userRepository: UserRepository;

  const mockUser = {
    email: 'test@example.com',
    password: 'password123',
    userType: UserType.EMPLOYEE,
  };

  const mockCreatedUser = {
    id: 1,
    ...mockUser,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: 'USER_REPOSITORY',
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
    userRepository = module.get<UserRepository>('USER_REPOSITORY');
  });

  describe('execute', () => {
    it('should create a user successfully', async () => {
      jest.spyOn(userRepository, 'create').mockResolvedValue(mockCreatedUser);

      const result = await service.execute(mockUser);

      expect(result).toEqual(mockCreatedUser);
      expect(userRepository.create).toHaveBeenCalledWith(mockUser);
    });

    it('should throw an error if repository fails', async () => {
      const error = new Error('Database error');
      jest.spyOn(userRepository, 'create').mockRejectedValue(error);

      await expect(service.execute(mockUser)).rejects.toThrow(error);
    });
  });
});
