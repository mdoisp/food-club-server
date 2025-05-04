import { OrderEntity } from "../entities/order.entity";
import { OrderRepository } from "../repositories/order.repository";

export const orderProviders = [{
    provide: 'ORDER_ENTITY',
    useValue: OrderEntity
},
  {
    provide: 'ORDER_REPOSITORY', // Token de injeção
    useClass: OrderRepository // Usa a classe diretamente
  }
]