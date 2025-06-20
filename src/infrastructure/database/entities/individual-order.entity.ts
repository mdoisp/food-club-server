import { Table, Model, Column, DataType, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript';
import { EmployeeEntity } from './employee.entity';
import { OrderItemEntity } from './order-item.entity';
import { CompanyOrderEntity } from './company-order.entity';

@Table({ tableName: 'individual_order', timestamps: false })
export class IndividualOrderEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => CompanyOrderEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'companyOrderId',
  })
  companyOrderId: number;

  @ForeignKey(() => EmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'employeeId',
  })
  employeeId: number;

  @BelongsTo(() => CompanyOrderEntity)
  companyOrder: CompanyOrderEntity;

  @BelongsTo(() => EmployeeEntity)
  employee: EmployeeEntity;

}