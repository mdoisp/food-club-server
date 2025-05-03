export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}
  
export interface OrderInterface {
    id: number;
    employeeId: number;
    dishId: number;
    date: Date;
    status: OrderStatus;
    comments: string;
}  