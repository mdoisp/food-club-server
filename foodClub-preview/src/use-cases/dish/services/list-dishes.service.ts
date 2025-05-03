import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/database/repositories/product.repository';
import { ProductEntityInterface } from 'src/database/entities/product.interface';

@Injectable()
export class ListDishesService {
  constructor(private productRepository: ProductRepository) {}
  execute(): Promise<ProductEntityInterface[]>{
    return this.productRepository.list();
  }
}
