import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserService } from './services/create-user.service';
import { DeleteUserService } from './services/delete-user.service';
import { GetUserByIdService } from './services/get-user-byid.service';
import { ListUsersService } from './services/list-users.service';
import { UpdateUserService } from './services/update-user.service';
import { Response } from 'express';
import { UserInterface, UserType, UpdateUserDto } from './user.interface';

describe('UserController', () => {
  let controller: UserController;
  let createUserService: CreateUserService;
  let getUserByIdService: GetUserByIdService;
  let listUsersService: ListUsersService;
  let updateUserService: UpdateUserService;
  let deleteUserService: DeleteUserService;

  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  } as unknown as Response;

  const mockUser: UserInterface = {
    id: 1,
    email: 'test@example.com',
    password: 'password123',
    userType: UserType.EMPLOYEE,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: CreateUserService,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetUserByIdService,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: ListUsersService,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: UpdateUserService,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: DeleteUserService,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    createUserService = module.get<CreateUserService>(CreateUserService);
    getUserByIdService = module.get<GetUserByIdService>(GetUserByIdService);
    listUsersService = module.get<ListUsersService>(ListUsersService);
    updateUserService = module.get<UpdateUserService>(UpdateUserService);
    deleteUserService = module.get<DeleteUserService>(DeleteUserService);
  });

  describe('list', () => {
    it('should return an array of users', async () => {
      const users = [mockUser];
      jest.spyOn(listUsersService, 'execute').mockResolvedValue(users);

      const result = await controller.list();

      expect(result).toEqual(users);
      expect(listUsersService.execute).toHaveBeenCalled();
    });
  });

  describe('getById', () => {
    it('should return a user when found', async () => {
      jest.spyOn(getUserByIdService, 'execute').mockResolvedValue(mockUser);

      await controller.getById('1', mockResponse);

      expect(getUserByIdService.execute).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 404 when user not found', async () => {
      jest.spyOn(getUserByIdService, 'execute').mockResolvedValue(null);

      await controller.getById('1', mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Usuário não encontrado',
      });
    });
  });

  describe('create', () => {
    it('should create a user successfully', async () => {
      jest.spyOn(createUserService, 'execute').mockResolvedValue(mockUser);

      await controller.create(mockUser, mockResponse);

      expect(createUserService.execute).toHaveBeenCalledWith(mockUser);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 400 when required fields are missing', async () => {
      const invalidUser = { email: 'test@example.com' } as UserInterface;

      await controller.create(invalidUser, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Todos os campos são obrigatórios',
      });
    });
  });

  describe('update', () => {
    it('should update a user successfully', async () => {
      const updatedUser: UpdateUserDto = {
        email: 'updated@example.com',
        password: 'password123',
        userType: UserType.EMPLOYEE,
      };
      const updatedUserResponse: UserInterface = {
        ...updatedUser,
        id: 1,
      };
      jest.spyOn(updateUserService, 'execute').mockResolvedValue(updatedUserResponse);

      await controller.update('1', updatedUser, mockResponse);

      expect(updateUserService.execute).toHaveBeenCalledWith(1, updatedUser);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(updatedUserResponse);
    });

    it('should return 404 when user not found', async () => {
      const updateData: UpdateUserDto = {
        email: 'test@example.com',
        password: 'password123',
        userType: UserType.EMPLOYEE,
      };
      jest.spyOn(updateUserService, 'execute').mockResolvedValue(null);

      await controller.update('1', updateData, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Usuário não encontrado',
      });
    });

    it('should return 400 when invalid fields are provided', async () => {
      const invalidData = {
        email: 'test@example.com',
        invalidField: 'invalid',
      } as any;

      await controller.update('1', invalidData, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Campos inválidos',
      });
    });
  });

  describe('delete', () => {
    it('should delete a user successfully', async () => {
      jest.spyOn(getUserByIdService, 'execute').mockResolvedValue(mockUser);
      jest.spyOn(deleteUserService, 'execute').mockResolvedValue(true);

      await controller.delete('1', mockResponse);

      expect(getUserByIdService.execute).toHaveBeenCalledWith(1);
      expect(deleteUserService.execute).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        message: 'Usuário deletado com sucesso',
      });
    });

    it('should return 404 when user not found', async () => {
      jest.spyOn(getUserByIdService, 'execute').mockResolvedValue(null);

      await controller.delete('1', mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Usuário não encontrado',
      });
    });
  });
}); 