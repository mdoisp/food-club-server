import { Order, OrderStatus } from '../entities/order.entity';

export interface OrderRepository {
  findAll(params?: {
    employeeId?: string;
    status?: OrderStatus;
    date?: Date;
  }): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  create(order: Order): Promise<Order>;
  update(id: string, order: Partial<Order>): Promise<Order | null>;
  delete(id: string): Promise<boolean>;
}
