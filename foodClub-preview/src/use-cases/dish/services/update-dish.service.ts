import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class UpdateDishService {
  constructor(private productRepository: ProductRepository) {}
  
  execute(id: number, productData: DishInterface): DishInterface {
    return this.productRepository.update(id, productData);
  }
}