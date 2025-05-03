export interface DishEntityInterface {
    idPrato: number;
    name: string;
    price: number;
    description?: string;
    ingredients: string[];
    restaurantId: number;
    isAvailable: boolean;
  }