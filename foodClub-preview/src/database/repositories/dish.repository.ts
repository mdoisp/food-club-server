import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../../use-cases/dish/dish.interface';
import { DishEntity } from '../entities/dish.entity';
import { DishEntityInterface } from '../interfaces/dish.interface';

@Injectable()
export class DishRepository {
  private dishes: DishInterface[] = [];

  constructor(
    @Inject('DISH_ENTITY')
    private dishEntity: typeof DishEntity,
  ) {}

  create(dish: DishInterface): void {
    this.dishes.push(dish);
  }

  update(id: number, dishData: DishInterface): DishInterface {
    const index = this.dishes.findIndex((dish) => dish.idPrato === id);
    if (index === -1) throw new Error('Prato não encontrado!');

    const updatedDish = { ...dishData, id: this.dishes[index].idPrato };
    this.dishes[index] = updatedDish;
    return updatedDish;
  }

  getById(id: number): DishInterface {
    const dish = this.dishes.find((dish) => dish.idPrato === id);
    if (!dish) throw new Error('Prato não encontrado!');
    return dish;
  }

  async list(): Promise<DishEntityInterface[]> {
    return await this.dishEntity.findAll();
  }

  delete(id: number): void {
    const index = this.dishes.findIndex((dish) => dish.idPrato === id);
    if (index === -1) throw new Error('Prato não encontrado!');
    this.dishes.splice(index, 1);
  }
}