import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class UpdateDishService {
  constructor(private dishRepository: DishRepository) {}
  execute(id: number, productData: DishInterface): Promise<DishInterface> {
    return this.dishRepository.update(id, productData);
  }
}