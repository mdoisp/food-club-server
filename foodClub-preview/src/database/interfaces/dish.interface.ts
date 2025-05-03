export interface DishEntityInterface {
    idDish: number;
    name: string;
    price: number;
    description: string;
    ingredients: string[];
    restaurantId: number;
    isAvailable: boolean;
  }