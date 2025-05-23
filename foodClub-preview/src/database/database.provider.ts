import { Sequelize } from "sequelize-typescript"
import { DishEntity } from "./entities/dish.entity";
import { CompanyEntity } from "./entities/company.entity";
import { EmployeeEntity } from "./entities/employee.entity";
import { OrderEntity } from "./entities/order.entity";
import { RestaurantEntity } from "./entities/restaurant.entity";
import { RestaurantDishEntity } from "./entities/restaurant-dish.entity";

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './database.sqlite',
                dialect: 'sqlite'
            });

            sequelize.addModels([DishEntity, CompanyEntity, EmployeeEntity, OrderEntity, RestaurantEntity, RestaurantDishEntity]);
            return sequelize;
        }
    }
]