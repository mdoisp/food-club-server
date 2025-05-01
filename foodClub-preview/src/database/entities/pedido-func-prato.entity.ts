// Arquivo: src/entities/pedido-func-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { PedidoFuncionarioEntity } from './pedido-funcionario.entity';
import { PratoEntity } from './prato.entity';

@Table({
  tableName: 'PedidoFunc_Prato',
  timestamps: false,
})
export class PedidoFuncPratoEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => PedidoFuncionarioEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_PedidoFunc',
  })
  pedidoFuncId: number;

  @PrimaryKey
  @ForeignKey(() => PratoEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  pratoId: number;
}