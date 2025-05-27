import { Table, Model, Column, DataType, HasOne } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { EmployeeEntity } from './employee.entity';
import { RestaurantEntity } from './restaurant.entity';

@Table({ tableName: 'user', timestamps: false })
export class UserEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('company', 'employee', 'restaurant'),
    allowNull: false,
    field: 'user_type',
  })
  userType: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    field: 'verification_token',
  })
  verificationToken: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'verification_token_expire_at',
  })
  verificationTokenExpireAt: Date;

  @HasOne(() => CompanyEntity)
  company: CompanyEntity;

  @HasOne(() => EmployeeEntity)
  employee: EmployeeEntity;

  @HasOne(() => RestaurantEntity)
  restaurant: RestaurantEntity;
}