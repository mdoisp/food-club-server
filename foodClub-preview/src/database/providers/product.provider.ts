import { ProductEntity } from "../entities/product.entity";

export const productProvider = [{
    provide: 'PRODUCT_ENTITY',
    useValue: ProductEntity
}]