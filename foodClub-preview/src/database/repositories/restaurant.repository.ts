import { Inject, Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../../use-cases/restaurant/restaurant.interface';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';

@Injectable()
export class RestaurantRepository {
  private restaurants: RestaurantInterface[] = [];

  constructor(
    @Inject('RESTAURANT_ENTITY')
    private restaurantEntity: typeof RestaurantEntity,
  ) {}

  create(restaurant: RestaurantInterface): void {
    this.restaurants.push(restaurant);
  }

  update(id: number, restaurantData: RestaurantInterface): RestaurantInterface {
    const index = this.restaurants.findIndex((restaurant) => restaurant.idRestaurante === id);
    if (index === -1) throw new Error('Restaurante não encontrado!');

    const updatedRestaurant = { ...restaurantData, id: this.restaurants[index].idRestaurante };
    this.restaurants[index] = updatedRestaurant;
    return updatedRestaurant;
  }

  getById(id: number): RestaurantInterface {
    const restaurant = this.restaurants.find((restaurant) => restaurant.idRestaurante === id);
    if (!restaurant) throw new Error('Restaurante não encontrado!');
    return restaurant;
  }

  async list(): Promise<RestaurantEntityInterface[]> {
    return await this.restaurantEntity.findAll();
  }

  delete(id: number): void {
    const index = this.restaurants.findIndex((restaurant) => restaurant.idRestaurante === id);
    if (index === -1) throw new Error('Restaurante não encontrado!');
    this.restaurants.splice(index, 1);
  }
}