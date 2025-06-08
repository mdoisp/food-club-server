import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IndividualOrderEntity } from './individual-order.entity';
import { DishEntity } from './dish.entity';

@Table({ 
  tableName: 'order_item', 
  timestamps: false,
  underscored: true // Adiciona suporte para snake_case
})
export class OrderItemEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => IndividualOrderEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'individual_order_id',
  })
  individualOrderId: number;

  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'dish_id', // Corrigido para snake_case
  })
  dishId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  quantity: number;

  @BelongsTo(() => IndividualOrderEntity, {
    foreignKey: 'individual_order_id',
    as: 'individualOrder'
  })
  individualOrder: IndividualOrderEntity;

  @BelongsTo(() => DishEntity, {
    foreignKey: 'dish_id',
    as: 'dish'
  })
  dish: DishEntity;
}