import { Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class CreateDishService {
    constructor(private dishRepository: DishRepository){}
    execute(dish: DishInterface): void {
        this.dishRepository.create(dish);
    }
}
