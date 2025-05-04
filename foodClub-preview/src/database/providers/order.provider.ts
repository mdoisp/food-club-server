import { OrderEntity } from "../entities/order.entity";

export const orderProvider = [{
    provide: 'ORDER_ENTITY',
    useValue: OrderEntity
}]