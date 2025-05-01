import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { CreateProductService } from './services/create-product.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ListProductService, GetProductByIdService, CreateProductService, UpdateProductService, DeleteProductService],
})
export class ProductsModule {}

