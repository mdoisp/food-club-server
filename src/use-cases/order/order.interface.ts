import { OrderItemEntityInterface } from "src/domain/repositories/order-item.interface";

export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}
  
export interface OrderInterface {
    idPedido: number;
    employeeId: number;
    dishId: number;
    date: Date;
    status: OrderItemEntityInterface;
    comments?: string;
}  