// Arquivo: src/entities/pedido-empresa-prato.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { OrderCompanyEntity } from './company-order.entity';
import { DishEntity } from './dish.entity';

@Table({
  tableName: 'PedidoEmpresa_Prato',
  timestamps: false,
})
export class CompanyOrderDishEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => OrderCompanyEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Pedido',
  })
  idPedido: number;

  @PrimaryKey
  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Prato',
  })
  idPrato: number;
}