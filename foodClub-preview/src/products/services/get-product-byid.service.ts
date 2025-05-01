import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../product.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class GetProductByIdService {
  constructor(private productRepository: ProductRepository){}
  execute(id: number): ProductInterface {
    return this.productRepository.getById(id);
  }
}
