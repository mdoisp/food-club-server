// Arquivo: src/entities/prato.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, DataType } from 'sequelize-typescript';
import { RestaurantDishEntity as RestaurantDishEntity } from './restaurant-dish.entity';
import { OrderEmployeeDishEntity as OrderEmployeeDishEntity } from './order-employee-dish.entity';
import { OrderCompanyDishEntity as OrderCompanyDishEntity } from './order-company-dish.entity';

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

  @HasMany(() => RestaurantDishEntity)
  restaurantes: RestaurantDishEntity[];

  @HasMany(() => OrderEmployeeDishEntity)
  pedidosFuncionario: OrderEmployeeDishEntity[];

  @HasMany(() => OrderCompanyDishEntity)
  pedidosEmpresa: OrderCompanyDishEntity[];
}