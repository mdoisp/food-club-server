export class DailyMenu {
  id: string;
  date: Date;
  dishes: Dish[];
  restaurantId: string;
  companyId: string;

  constructor(params: {
    id: string;
    date: Date;
    dishes: Dish[];
    restaurantId: string;
    companyId: string;
  }) {
    this.id = params.id;
    this.date = params.date;
    this.dishes = params.dishes;
    this.restaurantId = params.restaurantId;
    this.companyId = params.companyId;
  }
}
