import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TestUserModule } from './user.module';
import { Sequelize } from 'sequelize-typescript';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let sequelize: Sequelize;
  let createdUserId: number;

  const testUser = {
    email: 'test@example.com',
    password: 'password123',
    userType: 'employee',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestUserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    sequelize = moduleFixture.get<Sequelize>('SEQUELIZE');

    // Garantir que o banco de dados está limpo
    await sequelize.sync({ force: true });

    // Executar migrações
    await TestUserModule.runMigrations(sequelize.getQueryInterface());

    await app.init();
  });

  afterAll(async () => {
    await sequelize.close();
    await app.close();
  });

  it('/user (POST) - should create a new user', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(testUser)
      .expect(201)
      .then(response => {
        createdUserId = response.body.id;
        expect(response.body).toBeDefined();
        expect(response.body.email).toBe(testUser.email);
        expect(response.body.userType).toBe(testUser.userType);
      });
  });

  it('/user (GET) - should list users', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].email).toBe(testUser.email);
      });
  });

  it('/user/:id (GET) - should get user by id', () => {
    return request(app.getHttpServer())
      .get(`/user/${createdUserId}`)
      .expect(200)
      .then(response => {
        expect(response.body).toBeDefined();
        expect(response.body.email).toBe(testUser.email);
        expect(response.body.userType).toBe(testUser.userType);
      });
  });

  it('/user/:id (PUT) - should update user', () => {
    const updatedData = {
      email: 'updated@example.com',
      password: 'newpassword123',
    };

    return request(app.getHttpServer())
      .put(`/user/${createdUserId}`)
      .send(updatedData)
      .expect(200)
      .then(response => {
        expect(response.body).toBeDefined();
        expect(response.body.email).toBe(updatedData.email);
      });
  });

  it('/user/:id (DELETE) - should delete user', () => {
    return request(app.getHttpServer())
      .delete(`/user/${createdUserId}`)
      .expect(200)
      .then(response => {
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Usuário deletado com sucesso');
      });
  });

  it('/user/:id (GET) - should return 404 for deleted user', () => {
    return request(app.getHttpServer())
      .get(`/user/${createdUserId}`)
      .expect(404)
      .then(response => {
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe('Usuário não encontrado');
      });
  });
});
