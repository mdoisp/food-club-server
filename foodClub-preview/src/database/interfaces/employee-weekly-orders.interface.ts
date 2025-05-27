export interface EmployeeWeeklyOrdersEntityInterface {
  id: number;
  employeeId: number;
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  individualOrderId?: number;
}