export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}
  
export interface OrderInterface {
    id: string;
    employeeId: string;
    dishId: string;
    date: Date;
    status: OrderStatus;
    comments: string;
}  