import { IndividualOrderEntity } from "../entities/individual-order.entity";
import { IndividualOrderRepository } from "../repositories/individual-order.repository";

export const individualOrderProvider = [
  {
    provide: 'INDIVIDUAL_ORDER_ENTITY',
    useValue: IndividualOrderEntity,
  },
  {
    provide: 'INDIVIDUAL_ORDER_REPOSITORY',
    useClass: IndividualOrderRepository,
  },
];