import { DayOfWeek } from "src/database/interfaces/employee-weekly-orders.interface";

export interface EmployeeWeeklyOrderInterface {
  id: number;
  employeeId: number;
  dayOfWeek: DayOfWeek;
  individualOrderId: number;
  createdAt?: Date;
  updatedAt?: Date;
} 