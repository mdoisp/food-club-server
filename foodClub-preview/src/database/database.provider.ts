import { Sequelize } from "sequelize-typescript"
import { ProductEntity } from "./entities/product.entity";

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './database.sqlite',
                dialect: 'sqlite'
            });

            sequelize.addModels([ProductEntity]);
            return sequelize;
        }
    }
]