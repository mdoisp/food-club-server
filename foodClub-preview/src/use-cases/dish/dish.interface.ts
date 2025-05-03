export interface DishInterface{
    idDish: number;
    name: string;
    price: number;
    description: string;
    ingredients: string[];
    restaurantId: number;
    isAvailable: boolean;
}