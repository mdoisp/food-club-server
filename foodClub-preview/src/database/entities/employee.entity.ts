import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { UserEntity } from './user.entity';
import { CompanyEntity } from './company.entity';
import { EmployeeWeeklyOrdersEntity } from './employee-weekly-orders.entity';
import { IndividualOrderEntity } from './individual-order.entity';

@Table({ tableName: 'employee', timestamps: false })
export class EmployeeEntity extends Model {
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
    type: DataType.INTEGER,
    allowNull: false,
    field: 'company_id',
  })
  companyId: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(14),
    allowNull: false,
    unique: true,
  })
  cpf: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    field: 'birth_date',
  })
  birthDate: Date;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => CompanyEntity)
  company: CompanyEntity;

  @HasMany(() => IndividualOrderEntity)
  individualOrders: IndividualOrderEntity[];

  @HasMany(() => EmployeeWeeklyOrdersEntity)
  weeklyOrders: EmployeeWeeklyOrdersEntity[];
}