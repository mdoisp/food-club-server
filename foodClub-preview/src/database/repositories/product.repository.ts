import { Inject, Injectable } from '@nestjs/common';
import { ProductInterface } from 'src/products/product.interface';
import { ProductEntity } from '../entities/product.entity';
import { ProductEntityInterface } from '../entities/product.interface';

@Injectable()
export class ProductRepository {
    private products: ProductInterface[] = [];

    
    constructor(
        @Inject('PRODUCT_ENTITY')
        private productEntity: typeof ProductEntity,
    ){}

    create(product: ProductInterface): void {
        this.products.push(product);
    }

    update(id: number, productData: ProductInterface): ProductInterface {
        const index = this.products.findIndex((product) => product.id === id);
        
        if (index === -1) {
            throw new Error('Produto não encontrado!');
        }
        
        //Mantém o ID original e atualiza os demais campos
        const updatedProduct = {
            ...productData,
            id: this.products[index].id
        };
        
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    getById(id: number): ProductInterface{
        const product = this.products.find((product) => product.id === id);
        if (!product) throw Error('Produto não encontrado!');
        return product;
    }

    async list(): Promise<ProductEntityInterface[]>{
        const products = await this.productEntity.findAll();
        return products;
    }

    delete(id: number): void {
        const index = this.products.findIndex((product) => product.id === id);
        
        if (index === -1) {
            throw new Error('Produto não encontrado!');
        }

        this.products.splice(index, 1);
    }
}
