import { OrderItemEntityInterface } from "./order-item.repository.interface";

export enum IndividualOrderStatus {
  PREPARING = 'preparing',
  COMPLETED = 'completed',
}

export interface IndividualOrderEntityInterface {
  id: number;
  companyOrderId: number;
  employeeId: number;
  dishId?: number;
  status: IndividualOrderStatus;
}