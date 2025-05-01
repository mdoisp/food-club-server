import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class DeleteProductService {
  constructor(private productRepository: ProductRepository) {}
  
  execute(id: number): void {
    this.productRepository.delete(id);
  }
}