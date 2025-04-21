import { DailyMenu } from '../entities/daily-menu.entity';

export interface DailyMenuRepository {
  findAll(params?: {
    restaurantId?: string;
    companyId?: string;
    date?: Date;
  }): Promise<DailyMenu[]>;
  findById(id: string): Promise<DailyMenu | null>;
  create(dailyMenu: DailyMenu): Promise<DailyMenu>;
  update(id: string, dailyMenu: Partial<DailyMenu>): Promise<DailyMenu | null>;
  delete(id: string): Promise<boolean>;
}