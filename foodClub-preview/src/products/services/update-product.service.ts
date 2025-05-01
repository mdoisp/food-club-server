import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../product.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class UpdateProductService {
  constructor(private productRepository: ProductRepository) {}
  
  execute(id: number, productData: ProductInterface): ProductInterface {
    return this.productRepository.update(id, productData);
  }
}