import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { UserEntity } from './user.entity';
import { DishEntity } from './dish.entity';
import { CompanyOrderEntity } from './company-order.entity';

@Table({ tableName: 'restaurant', timestamps: false })
export class RestaurantEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  cnpj: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  number: string;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @HasMany(() => DishEntity)
  dishes: DishEntity[];

  @HasMany(() => CompanyOrderEntity)
  companyOrders: CompanyOrderEntity[];
}