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
      const dish = await this.restaurantEntity.findByPk(id);
      if (!dish) throw new Error('Prato não encontrado!');
      
      return await dish.update(restaurantData);
    }

    async getById(id: number): Promise<RestaurantEntityInterface> {
      const dish = await this.restaurantEntity.findByPk(id);
      if (!dish) throw new Error('Prato não encontrado!');
      return dish;
    }

  async list(): Promise<RestaurantEntityInterface[]> {
    return await this.restaurantEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const dish = await this.restaurantEntity.findByPk(id);
    if (!dish) throw new Error('Prato não encontrado!');
    await dish.destroy();
  }
}