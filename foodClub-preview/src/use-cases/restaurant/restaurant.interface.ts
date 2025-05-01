import { DishInterface } from "../dish/dish.interface";

export interface RestaurantInterface {
    id: string;
    name: string;
    description?: string;
    address: string;
    phone: string;
    email: string;
    dishes: DishInterface[];
}