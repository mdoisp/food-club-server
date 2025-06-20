import { DishEntityInterface } from "./dish.repository.interface";
import { CompanyOrderEntityInterface } from "./company-order.repository.interface";
import { RestaurantRatingEntityInterface } from "./restaurant-rating.repository.interface";

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