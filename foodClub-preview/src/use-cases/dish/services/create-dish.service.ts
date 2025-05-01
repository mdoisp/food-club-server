import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class CreateDishService {
    constructor(private productRepository: ProductRepository){}
    execute(product: DishInterface): void {
        this.productRepository.create(product);
    }
}
