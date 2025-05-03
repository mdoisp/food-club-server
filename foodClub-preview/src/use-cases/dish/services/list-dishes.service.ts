import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class ListDishesService {
  constructor(private dishRepository: DishRepository) {}
  execute(): Promise<DishInterface[]>{
    return this.dishRepository.list();
  }
}
