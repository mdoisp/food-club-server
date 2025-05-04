import { Inject, Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../use-cases/restaurant/restaurant.interface';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';

@Injectable()
export class RestaurantRepository {
  constructor(
    @Inject('RESTAURANT_ENTITY')
    private restaurantEntity: typeof RestaurantEntity,
  ) {}

  async create(restaurant: Omit<RestaurantEntityInterface, 'idRestaurante'>): Promise<RestaurantEntityInterface> {
    return await this.restaurantEntity.create(restaurant);
  }

  async update(
      id: number,
      restaurantData: Partial<Omit<RestaurantEntityInterface, 'idRestaurante'>>,
    ): Promise<RestaurantEntityInterface> {
      const restaurant = await this.restaurantEntity.findByPk(id);
      if (!restaurant) throw new Error('Prato não encontrado!');
      
      return await restaurant.update(restaurantData);
    }

    async getById(id: number): Promise<RestaurantEntityInterface> {
      const restaurant = await this.restaurantEntity.findByPk(id);
      if (!restaurant) throw new Error('Prato não encontrado!');
      return restaurant;
    }

  async list(): Promise<RestaurantEntityInterface[]> {
    return await this.restaurantEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const restaurant = await this.restaurantEntity.findByPk(id);
    if (!restaurant) throw new Error('Prato não encontrado!');
    await restaurant.destroy();
  }
}