import { DishEntityInterface } from "src/domain/repositories/dish.repository.interface";
import { CompanyOrderEntityInterface } from "src/domain/repositories/company-order.repository.interface";
import { RestaurantRatingInterface } from './restaurant-rating.model';

export interface RestaurantInterface {
    id: number;
    userId: number;
    name: string;
    cnpj: string;
    cep: string;
    number: string;
    profileImage?: string;
    averageRating?: number;
    dishes?: DishEntityInterface[];
    companyOrders?: CompanyOrderEntityInterface[];
    restaurantRatings?: RestaurantRatingInterface[];
}