import { DishEntity } from "../entities/dish.entity";

export const dishProvider = [{
    provide: 'DISH_ENTITY',
    useValue: DishEntity
}]