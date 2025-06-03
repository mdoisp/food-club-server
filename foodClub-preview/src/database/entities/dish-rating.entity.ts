import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { DishEntity } from './dish.entity';
import { UserEntity } from './user.entity';

@Table({ tableName: 'dish_rating', timestamps: false })
export class DishRatingEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => DishEntity) 
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'dish_id',
  })
  dishId: number;

  @ForeignKey(() => UserEntity) 
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  rating: number;

  @BelongsTo(() => DishEntity, {
    foreignKey: 'dishId'
  })
  dish: DishEntity;

  @BelongsTo(() => UserEntity, {
    foreignKey: 'userId' 
  })
  user: UserEntity;
}