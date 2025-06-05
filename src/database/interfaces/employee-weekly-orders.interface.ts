export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export interface EmployeeWeeklyOrdersEntityInterface {
  id: number;
  employeeId: number;
  dayOfWeek: DayOfWeek;
  individualOrderId?: number;
}
