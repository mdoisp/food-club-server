import { Module } from '@nestjs/common';
import { ProductRepository } from './repositories/product.repository';
import { databaseProvider } from './database.provider';
import { productProvider } from './providers/product.provider';

@Module({
    providers:[ProductRepository, ...databaseProvider, ...productProvider],
    exports:[ProductRepository]
})
export class DatabaseModule {}
