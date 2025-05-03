// Arquivo: src/entities/restaurante-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { RestaurantEntity } from './restaurant.entity';
import { DishEntity } from './dish.entity';

@Table({
  tableName: 'Restaurante_Prato',
  timestamps: false,
})
export class RestaurantDishEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => RestaurantEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Restaurantes',
  })
  idRestaurantes: number;

  @PrimaryKey
  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  idPrato: number;
}