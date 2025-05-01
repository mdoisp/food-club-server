// Arquivo: src/entities/pedido-funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { FuncionarioEntity } from './funcionario.entity';
import { PedidoFuncPratoEntity } from './pedido-func-prato.entity';

@Table({
  tableName: 'Pedido_Funcionario',
  timestamps: false,
})
export class PedidoFuncionarioEntity extends Model {
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

  @ForeignKey(() => FuncionarioEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Funcionario',
  })
  funcionarioId: number;

  @BelongsTo(() => FuncionarioEntity)
  funcionario: FuncionarioEntity;

  @HasMany(() => PedidoFuncPratoEntity)
  pratos: PedidoFuncPratoEntity[];
}