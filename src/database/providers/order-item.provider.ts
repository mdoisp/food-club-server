import { OrderItemEntity } from "../entities/order-item.entity";
import { OrderItemRepository } from "../repositories/order-item.repository";

export const orderItemProvider = [
  {
    provide: 'ORDER_ITEM_ENTITY',
    useValue: OrderItemEntity,
  },
  {
    provide: 'ORDER_ITEM_REPOSITORY',
    useClass: OrderItemRepository,
  },
];