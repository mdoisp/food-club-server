// Arquivo: src/entities/pedido-funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { EmployeeEntity } from './employee.entity';
import { OrderEmployeeDishEntity } from './order-employee-dish.entity';

@Table({
  tableName: 'Pedido_Funcionario',
  timestamps: false,
})
export class OrderEmployeeEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_PedidoFunc',
  })
  id: number;

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
  funcionarioId: number;

  @BelongsTo(() => EmployeeEntity)
  funcionario: EmployeeEntity;

  @HasMany(() => OrderEmployeeDishEntity)
  pratos: OrderEmployeeDishEntity[];
}