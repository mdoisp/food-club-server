import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CompanyOrderRepository } from '../../infrastructure/database/repositories/company-order.repository';
import { ICompanyOrder } from '../../domain/models/company-order.model';

@Injectable()
export class ListOrdersByRestaurantUseCase {
  constructor(
    @Inject('COMPANY_ORDER_REPOSITORY')
    private readonly companyOrderRepository: CompanyOrderRepository,
  ) {}

  async execute(restaurantId: number): Promise<ICompanyOrder[]> {
    const orders = await this.companyOrderRepository.findOrdersByRestaurant(restaurantId);
    if (!orders || orders.length === 0) {
      throw new NotFoundException('Nenhum pedido encontrado para este restaurante.');
    }
    return orders;
  }
} 