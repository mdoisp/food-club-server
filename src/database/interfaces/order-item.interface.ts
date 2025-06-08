import { IndividualOrderEntityInterface } from "./individual-order.interface";

export interface OrderItemEntityInterface {
  id: number;
  // individualOrder: IndividualOrderEntityInterface;
  dishId: number;
  quantity: number;
}