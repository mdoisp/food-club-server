import { OrderItemEntityInterface } from "./order-item.repository.interface";

export interface IndividualOrderEntityInterface {
  id: number;
  companyOrderId: number;
  employeeId: number;
  dishId?: number;
}