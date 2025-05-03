import { DishInterface } from "../dish/dish.interface";

export interface RestaurantInterface {
    idRestaurante: number;
    name: string;
    description?: string;
    address: string;
    phone: string;
    email: string;
    dishes: DishInterface[];
}