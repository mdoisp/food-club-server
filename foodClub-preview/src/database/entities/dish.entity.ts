import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DishEntityInterface } from '../interfaces/dish.interface';
import { RestaurantEntity as RestaurantEntity } from './restaurant.entity';

@Table({ tableName: 'Dish',
  timestamps: false })
export class DishEntity extends Model implements DishEntityInterface{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    field: 'idDish'
  })
  idDish: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  price: number;

  @Column(DataType.TEXT)
  description: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: []
  })
  ingredients: string[];

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  isAvailable: boolean;

  @ForeignKey(() => RestaurantEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'restaurantId'
  })
  restaurantId: number;

  @BelongsTo(() => RestaurantEntity)
  restaurant: RestaurantEntity;
}