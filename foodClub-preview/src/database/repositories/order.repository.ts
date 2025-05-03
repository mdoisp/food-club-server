import { Inject, Injectable } from '@nestjs/common';
import { OrderInterface } from '../../use-cases/order/order.interface';
import { OrderEntity } from '../entities/order.entity';
import { OrderEntityInterface } from '../interfaces/order.interface';

@Injectable()
export class OrderRepository {
  private orders: OrderInterface[] = [];

  constructor(
    @Inject('ORDER_ENTITY')
    private orderEntity: typeof OrderEntity,
  ) {}

  create(order: OrderInterface): void {
    this.orders.push(order);
  }

  update(id: number, orderData: OrderInterface): OrderInterface {
    const index = this.orders.findIndex((order) => order.employeeId === id);
    if (index === -1) throw new Error('Pedido não encontrado!');

    const updatedOrder = { ...orderData, id: this.orders[index].employeeId };
    this.orders[index] = updatedOrder;
    return updatedOrder;
  }

  getById(id: number): OrderInterface {
    const order = this.orders.find((order) => order.employeeId === id);
    if (!order) throw new Error('Pedido não encontrado!');
    return order;
  }

  async list(): Promise<OrderEntityInterface[]> {
    return await this.orderEntity.findAll();
  }

  delete(id: number): void {
    const index = this.orders.findIndex((order) => order.employeeId === id);
    if (index === -1) throw new Error('Pedido não encontrado!');
    this.orders.splice(index, 1);
  }
}