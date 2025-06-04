import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from '../src/database/entities/user.entity';
import { CompanyEntity } from '../src/database/entities/company.entity';
import { EmployeeEntity } from '../src/database/entities/employee.entity';
import { RestaurantEntity } from '../src/database/entities/restaurant.entity';
import { CompanyAffiliateRestaurantEntity } from '../src/database/entities/company-affiliate-restaurant.entity';
import { CompanyOrderEntity } from '../src/database/entities/company-order.entity';
import { IndividualOrderEntity } from '../src/database/entities/individual-order.entity';
import { OrderItemEntity } from '../src/database/entities/order-item.entity';
import { DishEntity } from '../src/database/entities/dish.entity';
import { EmployeeWeeklyOrdersEntity } from '../src/database/entities/employee-weekly-orders.entity';
import { DishRatingEntity } from '../src/database/entities/dish-rating.entity';
import { DataTypes } from 'sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: ':memory:',
      autoLoadModels: false,
      models: [
        UserEntity,
        CompanyEntity,
        EmployeeEntity,
        RestaurantEntity,
        CompanyAffiliateRestaurantEntity,
        CompanyOrderEntity,
        IndividualOrderEntity,
        OrderItemEntity,
        DishEntity,
        EmployeeWeeklyOrdersEntity,
        DishRatingEntity
      ],
      synchronize: true,
      logging: false,
    }),
    SequelizeModule.forFeature([
      UserEntity,
      CompanyEntity,
      EmployeeEntity,
      RestaurantEntity,
      CompanyAffiliateRestaurantEntity,
      CompanyOrderEntity,
      IndividualOrderEntity,
      OrderItemEntity,
      DishEntity,
      EmployeeWeeklyOrdersEntity,
      DishRatingEntity
    ]),
  ],
})
export class TestDatabaseModule {
  static async runMigrations(queryInterface) {
    // Criar tabela de usuários
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userType: {
        type: DataTypes.ENUM('company', 'employee', 'restaurant'),
        allowNull: false,
        field: 'user_type',
      },
      verificationToken: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'verification_token',
      },
      verificationTokenExpireAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'verification_token_expire_at',
      },
    });

    // Criar tabela de empresas
    await queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    });

    // Criar tabela de funcionários
    await queryInterface.createTable('employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'company',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });

    // Criar tabela de restaurantes
    await queryInterface.createTable('restaurant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    });

    // Criar tabela de pratos
    await queryInterface.createTable('dish', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'restaurant',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    });

    // Criar tabela de avaliações de pratos
    await queryInterface.createTable('dish_rating', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dishId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'dish',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
    });

    // Criar tabela de afiliação empresa-restaurante
    await queryInterface.createTable('company_affiliate_restaurant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'company',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'restaurant',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

    // Criar tabela de pedidos individuais
    await queryInterface.createTable('individual_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'restaurant',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'),
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });

    // Criar tabela de pedidos de empresa
    await queryInterface.createTable('company_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'company',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'restaurant',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'),
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });

    // Criar tabela de itens de pedido
    await queryInterface.createTable('order_item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dishId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'dish',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      individualOrderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'individual_order',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      companyOrderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'company_order',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

    // Criar tabela de pedidos semanais de funcionários
    await queryInterface.createTable('employee_weekly_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      weekStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      weekEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      totalOrders: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  }
} 