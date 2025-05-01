// Arquivo: src/entities/restaurante.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, DataType } from 'sequelize-typescript';
import { RestaurantePratoEntity } from './restaurante-prato.entity';

@Table({
  tableName: 'Restaurante',
  timestamps: false,
})
export class RestauranteEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Restaurantes',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Restaurante',
  })
  nomeRestaurante: string;

  @Column({
    type: DataType.STRING(20),
    unique: true,
    field: 'CNPJ',
  })
  cnpj: string;

  @Column({
    type: DataType.STRING(100),
    field: 'Rua',
  })
  rua: string;

  @Column({
    type: DataType.STRING(10),
    field: 'Numero',
  })
  numero: string;

  @Column({
    type: DataType.STRING(10),
    field: 'CEP',
  })
  cep: string;

  @Column({
    type: DataType.STRING(50),
    field: 'Cidade',
  })
  cidade: string;

  @Column({
    type: DataType.STRING(2),
    field: 'Estado',
  })
  estado: string;

  @HasMany(() => RestaurantePratoEntity)
  pratos: RestaurantePratoEntity[];
}