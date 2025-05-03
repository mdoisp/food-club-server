export enum OrderStatusEntity {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
  }
  
  export interface OrderEntityInterface {
    idOrder: number;
    employeeId: number;
    dishId: number;
    date: Date;
    status: OrderStatusEntity;
    comments?: string;
  }