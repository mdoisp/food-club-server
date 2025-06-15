import { Sequelize } from "sequelize-typescript"
import { DishEntity } from "../database/entities/dish.entity";
import { CompanyEntity } from "../database/entities/company.entity";
import { EmployeeEntity } from "../database/entities/employee.entity";
import { RestaurantEntity } from "../database/entities/restaurant.entity";
import { UserEntity } from "../database/entities/user.entity";
import { DishRatingEntity } from "../database/entities/dish-rating.entity";
import { OrderItemEntity } from "../database/entities/order-item.entity";
import { CompanyAffiliateRestaurantEntity } from "../database/entities/company-affiliate-restaurant.entity";
import { IndividualOrderEntity } from "../database/entities/individual-order.entity";
import { EmployeeWeeklyOrdersEntity } from "../database/entities/employee-weekly-orders.entity";
import { CompanyOrderEntity } from "../database/entities/company-order.entity";

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './database.sqlite',
                dialect: 'sqlite'
            });

            sequelize.addModels([DishEntity, CompanyEntity, EmployeeEntity, RestaurantEntity, UserEntity, DishRatingEntity, OrderItemEntity,
                                 CompanyAffiliateRestaurantEntity, IndividualOrderEntity, EmployeeWeeklyOrdersEntity, CompanyOrderEntity]);
            return sequelize;
        }
    }
]