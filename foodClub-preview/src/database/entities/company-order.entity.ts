// Arquivo: src/entities/pedido-empresa.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { CompanyOrderDishEntity } from './company-order-dish.entity';

@Table({
  tableName: 'Pedido_Empresa',
  timestamps: false,
})
export class OrderCompanyEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Pedido',
  })
  idPedido: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: 'Numero_Pedido',
  })
  numeroPedido: string;

  @ForeignKey(() => CompanyEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Empresa',
  })
  idEmpresa: number;

  @BelongsTo(() => CompanyEntity)
  empresa: CompanyEntity;

  @HasMany(() => CompanyOrderDishEntity)
  pratos: CompanyOrderDishEntity[];
}