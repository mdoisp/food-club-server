import { Sequelize } from 'sequelize-typescript';
import { DishEntity } from './entities/dish.entity';
import { CompanyEntity } from './entities/company.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { RestaurantEntity } from './entities/restaurant.entity';
import { UserEntity } from './entities/user.entity';
import { DishRatingEntity } from './entities/dish-rating.entity';
import { OrderItemEntity } from './entities/order-item.entity';
import { CompanyAffiliateRestaurantEntity } from './entities/company-affiliate-restaurant.entity';
import { IndividualOrderEntity } from './entities/individual-order.entity';
import { EmployeeWeeklyOrdersEntity } from './entities/employee-weekly-orders.entity';
import { CompanyOrderEntity } from './entities/company-order.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        storage: './database.sqlite',
        dialect: 'sqlite',
      });

      sequelize.addModels([
        DishEntity,
        CompanyEntity,
        EmployeeEntity,
        RestaurantEntity,
        UserEntity,
        DishRatingEntity,
        OrderItemEntity,
        CompanyAffiliateRestaurantEntity,
        IndividualOrderEntity,
        EmployeeWeeklyOrdersEntity,
        CompanyOrderEntity,
      ]);
      return sequelize;
    },
  },
];
