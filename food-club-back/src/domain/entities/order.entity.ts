export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  READY = 'ready',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export class Order {
  id: string;
  employeeId: string;
  dishId: string;
  date: Date;
  status: OrderStatus;
  comments?: string;

  constructor(params: {
    id: string;
    employeeId: string;
    dishId: string;
    date: Date;
    status?: OrderStatus;
    comments?: string;
  }) {
    this.id = params.id;
    this.employeeId = params.employeeId;
    this.dishId = params.dishId;
    this.date = params.date;
    this.status = params.status || OrderStatus.PENDING;
    this.comments = params.comments;
  }
}
