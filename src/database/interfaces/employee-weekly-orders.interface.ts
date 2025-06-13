import { IndividualOrderEntityInterface } from "./individual-order.interface";
import { OrderItemEntityInterface } from "./order-item.interface";

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface EmployeeWeeklyOrdersEntityInterface {
  id: number;
  employeeId: number;
  dayOfWeek: DayOfWeek;
  orderItemId: number;
  order?: OrderItemEntityInterface;
}