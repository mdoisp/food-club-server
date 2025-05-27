import { IndividualOrderEntityInterface } from "./individual-order.interface";

export interface CompanyOrderEntityInterface {
  id: number;
  companyId: number;
  restaurantId: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered' | 'canceled';
  collaboratorsOrders?: IndividualOrderEntityInterface[];
}