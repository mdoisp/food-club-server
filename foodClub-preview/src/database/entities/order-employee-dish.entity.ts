// Arquivo: src/entities/pedido-func-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { OrderEmployeeEntity } from './order-employee.entity';
import { DishEntity } from './dish.entity';

@Table({
  tableName: 'PedidoFunc_Prato',
  timestamps: false,
})
export class OrderEmployeeDishEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => OrderEmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_PedidoFunc',
  })
  pedidoFuncId: number;

  @PrimaryKey
  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  pratoId: number;
}