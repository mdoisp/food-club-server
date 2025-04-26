/* eslint-disable prettier/prettier */
import { DishRepository } from '../../repositories/dish.repository';

export class DeleteDishUseCase {
  constructor(private readonly dishRepository: DishRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.dishRepository.delete(id);
  }
}