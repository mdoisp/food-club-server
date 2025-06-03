import { DishEntityInterface } from "src/database/interfaces/dish.interface";
import { CompanyOrderEntityInterface } from "src/database/interfaces/company-order.interface";

export interface RestaurantInterface {
    id: number;
    userId: number;
    name: string;
    cnpj: string;
    cep: string;
    number: string;
    dishes?: DishEntityInterface[];
    companyOrders?: CompanyOrderEntityInterface[];
}