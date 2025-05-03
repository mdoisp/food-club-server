import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';
import { CompanyEntity as CompanyEntity } from './company.entity';

@Table({ tableName: 'Employees' })
export class EmployeeEntity extends Model implements EmployeeEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true
  })
  email: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false
  })
  position: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false
  })
  department: string;

  @ForeignKey(() => CompanyEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'companyId'
  })
  companyId: number;

  @BelongsTo(() => CompanyEntity)
  company: CompanyEntity;
}