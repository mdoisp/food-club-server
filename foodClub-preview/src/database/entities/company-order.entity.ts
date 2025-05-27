import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { RestaurantEntity } from './restaurant.entity';
import { IndividualOrderEntity } from './individual-order.entity';
import { CompanyOrderStatus } from '../interfaces/company-order.interface';

@Table({ tableName: 'company_order', timestamps: false })
export class CompanyOrderEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'company_id',
  })
  companyId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'restaurant_id',
  })
  restaurantId: number;

  @Column({
    type: DataType.ENUM('pending', 'confirmed', 'preparing', 'delivered', 'canceled'),
    allowNull: false,
    defaultValue: 'pending',
  })
  status: CompanyOrderStatus;

  @BelongsTo(() => CompanyEntity)
  company: CompanyEntity;

  @BelongsTo(() => RestaurantEntity)
  restaurant: RestaurantEntity;

  @HasMany(() => IndividualOrderEntity)
  collaboratorsOrders: IndividualOrderEntity[];
}