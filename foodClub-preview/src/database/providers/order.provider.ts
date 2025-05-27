import { OrderEntity } from "../entities/order-item.entity";
import { OrderRepository } from "../repositories/order.repository";

export const orderProvider = [{
    provide: 'ORDER_ENTITY',
    useValue: OrderEntity
  },
  {
    provide: 'ORDER_REPOSITORY', 
    useClass: OrderRepository 
  }
]