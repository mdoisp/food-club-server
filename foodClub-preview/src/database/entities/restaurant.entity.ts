import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';
import { DishEntity as DishEntity } from './dish.entity';

@Table({ tableName: 'Restaurant',
  timestamps: false })
export class RestaurantEntity extends Model implements RestaurantEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    field: 'idRestaurante'
  })
  idRestaurante: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false
  })
  address: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  phone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true
  })
  email: string;

  @HasMany(() => DishEntity)
  dishes: DishEntity[];
}