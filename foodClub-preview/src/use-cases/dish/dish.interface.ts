export interface DishInterface{
    id: number;
    name: string;
    price: number;
    description: string;
    ingredients: string[];
    restaurantId: number;
    isAvailable: boolean;
}