// Arquivo: src/entities/restaurante-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { RestauranteEntity } from './restaurante.entity';
import { PratoEntity } from './prato.entity';

@Table({
  tableName: 'Restaurante_Prato',
  timestamps: false,
})
export class RestaurantePratoEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => RestauranteEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Restaurantes',
  })
  restauranteId: number;

  @PrimaryKey
  @ForeignKey(() => PratoEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  pratoId: number;
}