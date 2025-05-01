import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../product.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class CreateProductService {
    constructor(private productRepository: ProductRepository){}
    execute(product: ProductInterface): void {
        this.productRepository.create(product);
    }
}
