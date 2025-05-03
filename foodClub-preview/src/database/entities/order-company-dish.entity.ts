// Arquivo: src/entities/pedido-empresa-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { OrderCompanyEntity } from './order-company.entity';
import { DishEntity } from './dish.entity';

@Table({
  tableName: 'PedidoEmpresa_Prato',
  timestamps: false,
})
export class OrderCompanyDishEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => OrderCompanyEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Pedido',
  })
  pedidoId: number;

  @PrimaryKey
  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  pratoId: number;
}