import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';
import { CompanyEntity } from './company.entity';
import { CompanyEmployeeEntity } from './company-employee.entity';

@Table({ tableName: 'employee' })
export class EmployeeEntity extends Model implements EmployeeEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  employee_name: string;

  @BelongsToMany(() => CompanyEntity, () => CompanyEmployeeEntity)
  companies: CompanyEntity[];
}