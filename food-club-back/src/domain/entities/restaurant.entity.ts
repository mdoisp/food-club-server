import { Dish } from './dish.entity';

export class Restaurant {
  id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  dishes: Dish[];

  constructor(params: {
    id: string;
    name: string;
    description?: string;
    address: string;
    phone: string;
    email: string;
    logo?: string;
    dishes?: Dish[];
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.address = params.address;
    this.phone = params.phone;
    this.email = params.email;
    this.logo = params.logo;
    this.dishes = params.dishes || [];
  }
}
