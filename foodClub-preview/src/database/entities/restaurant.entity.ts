import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';
import { DishEntity as DishEntity } from './dish.entity';

@Table({ tableName: 'Restaurants' })
export class RestaurantEntity extends Model implements RestaurantEntityInterface {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
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