export enum DishCategory {
  APPETIZER = 'appetizer',
  MAIN_COURSE = 'main_course',
  DESSERT = 'dessert',
  BEVERAGE = 'beverage',
}

export class Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DishCategory;
  image?: string;
  ingredients: string[];
  restaurantId: string;
  isAvailable: boolean;

  constructor(params: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: DishCategory;
    image?: string;
    ingredients: string[];
    restaurantId: string;
    isAvailable?: boolean;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.price = params.price;
    this.category = params.category;
    this.image = params.image;
    this.ingredients = params.ingredients;
    this.restaurantId = params.restaurantId;
    this.isAvailable =
      params.isAvailable !== undefined ? params.isAvailable : true;
  }
}
