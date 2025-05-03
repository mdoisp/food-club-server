// Arquivo: src/entities/pedido-funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { EmployeeEntity } from './employee.entity';
import { EmployeeOrderDishEntity } from './employee-order-dish.entity';

@Table({
  tableName: 'Pedido_Funcionario',
  timestamps: false,
})
export class EmployeeOrderEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_PedidoFunc',
  })
  idPedidoFunc: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'ValorPedido',
  })
  valorPedido: number;

  @ForeignKey(() => EmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Funcionario',
  })
  idFuncionario: number;

  @BelongsTo(() => EmployeeEntity)
  funcionario: EmployeeEntity;

  @HasMany(() => EmployeeOrderDishEntity)
  pratos: EmployeeOrderDishEntity[];
}