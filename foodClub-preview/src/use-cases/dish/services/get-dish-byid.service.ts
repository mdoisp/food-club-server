import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class GetDishByIdService {
  constructor(private dishRepository: DishRepository){}
  execute(id: number): DishInterface {
    return this.dishRepository.getById(id);
  }
}
