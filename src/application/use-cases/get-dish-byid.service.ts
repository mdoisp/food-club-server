import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../../domain/models/dish.interface';
import { DishRepository } from '../../infrastructure/database/repositories/dish.repository';

@Injectable()
export class GetDishByIdService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ){}
  async execute(id: number): Promise<DishInterface> {
    return await this.dishRepository.getById(id);
  }
}
