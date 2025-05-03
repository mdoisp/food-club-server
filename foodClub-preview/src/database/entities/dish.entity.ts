// Arquivo: src/entities/prato.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, DataType } from 'sequelize-typescript';
import { RestaurantDishEntity as RestaurantDishEntity } from './restaurant-dish.entity';
import { EmployeeOrderDishEntity as EmployeeOrderDishEntity } from './employee-order-dish.entity';
import { CompanyOrderDishEntity as CompanyOrderDishEntity } from './company-order-dish.entity';

@Table({
  tableName: 'Prato',
  timestamps: false,
})
export class DishEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Prato',
  })
  idPrato: number;

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

  @HasMany(() => RestaurantDishEntity)
  restaurantes: RestaurantDishEntity[];

  @HasMany(() => EmployeeOrderDishEntity)
  pedidosFuncionario: EmployeeOrderDishEntity[];

  @HasMany(() => CompanyOrderDishEntity)
  pedidosEmpresa: CompanyOrderDishEntity[];
}