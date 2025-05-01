import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class GetDishByIdService {
  constructor(private productRepository: ProductRepository){}
  execute(id: number): DishInterface {
    return this.productRepository.getById(id);
  }
}
