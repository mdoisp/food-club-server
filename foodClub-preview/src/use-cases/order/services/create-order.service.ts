import { Injectable } from "@nestjs/common";
import { OrderInterface } from "../order.interface";
import { OrderRepository } from 'src/database/repositories/order-item.repository';

@Injectable()
export class CreateOrderService {
    constructor(private orderRepository: OrderRepository){}
    execute(order: OrderInterface): void {
        this.orderRepository.create(order);
    }
}