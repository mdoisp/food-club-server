import { Injectable } from '@nestjs/common';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class DeleteDishService {
  constructor(private dishRepository: DishRepository) {}
  execute(id: number): void {
    this.dishRepository.delete(id);
  }
}