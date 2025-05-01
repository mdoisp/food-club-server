// Arquivo: src/entities/prato.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, DataType } from 'sequelize-typescript';
import { RestaurantePratoEntity } from './restaurante-prato.entity';
import { PedidoFuncPratoEntity } from './pedido-func-prato.entity';
import { PedidoEmpresaPratoEntity } from './pedido-empresa-prato.entity';

@Table({
  tableName: 'Prato',
  timestamps: false,
})
export class PratoEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Prato',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Prato',
  })
  nomePrato: string;

  @Column({
    type: DataType.TEXT,
    field: 'Descricao_Prato',
  })
  descricaoPrato: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'Preco',
  })
  preco: number;

  @HasMany(() => RestaurantePratoEntity)
  restaurantes: RestaurantePratoEntity[];

  @HasMany(() => PedidoFuncPratoEntity)
  pedidosFuncionario: PedidoFuncPratoEntity[];

  @HasMany(() => PedidoEmpresaPratoEntity)
  pedidosEmpresa: PedidoEmpresaPratoEntity[];
}