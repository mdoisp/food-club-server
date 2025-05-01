// Arquivo: src/entities/pedido-empresa-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { PedidoEmpresaEntity } from './pedido-empresa.entity';
import { PratoEntity } from './prato.entity';

@Table({
  tableName: 'PedidoEmpresa_Prato',
  timestamps: false,
})
export class PedidoEmpresaPratoEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => PedidoEmpresaEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Pedido',
  })
  pedidoId: number;

  @PrimaryKey
  @ForeignKey(() => PratoEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  pratoId: number;
}