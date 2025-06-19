import { DishEntityInterface } from "./dish.interface";
import { CompanyOrderEntityInterface } from "./company-order.interface";
import { RestaurantRatingEntityInterface } from "./restaurant-rating.interface";

export interface RestaurantEntityInterface {
  id: number;
  userId: number;
  name: string;
  cnpj: string;
  cep: string;
  number: string;
  image?: string;
  dishes?: DishEntityInterface[];
  companyOrders?: CompanyOrderEntityInterface[];
  restaurantRatings?: RestaurantRatingEntityInterface[];
}