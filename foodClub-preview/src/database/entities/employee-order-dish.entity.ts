// Arquivo: src/entities/pedido-func-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { EmployeeOrderEntity } from './employee-order.entity';
import { DishEntity } from './dish.entity';

@Table({
  tableName: 'PedidoFunc_Prato',
  timestamps: false,
})
export class EmployeeOrderDishEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => EmployeeOrderEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_PedidoFunc',
  })
  idPedidoFunc: number;

  @PrimaryKey
  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  idPrato: number;
}