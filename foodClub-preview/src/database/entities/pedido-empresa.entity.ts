// Arquivo: src/entities/pedido-empresa.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { EmpresaEntity } from './empresa.entity';
import { PedidoEmpresaPratoEntity } from './pedido-empresa-prato.entity';

@Table({
  tableName: 'Pedido_Empresa',
  timestamps: false,
})
export class PedidoEmpresaEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Pedido',
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: 'Numero_Pedido',
  })
  numeroPedido: string;

  @ForeignKey(() => EmpresaEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Empresa',
  })
  empresaId: number;

  @BelongsTo(() => EmpresaEntity)
  empresa: EmpresaEntity;

  @HasMany(() => PedidoEmpresaPratoEntity)
  pratos: PedidoEmpresaPratoEntity[];
}