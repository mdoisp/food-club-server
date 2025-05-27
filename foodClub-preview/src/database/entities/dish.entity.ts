import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { RestaurantEntity } from './restaurant.entity';
import { DishRatingEntity } from './dish-rating.entity';
import { OrderItemEntity } from './order-item.entity';

@Table({ tableName: 'dish', timestamps: false })
export class DishEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'restaurant_id',
  })
  restaurantId: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  image: string;

  @BelongsTo(() => RestaurantEntity)
  restaurant: RestaurantEntity;

  @HasMany(() => DishRatingEntity)
  ratings: DishRatingEntity[];

  @HasMany(() => OrderItemEntity)
  orderItems: OrderItemEntity[];
}