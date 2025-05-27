import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'company_order_id',
  })
  companyOrderId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'employee_id',
  })
  employeeId: number;

  @BelongsTo(() => CompanyOrderEntity)
  companyOrder: CompanyOrderEntity;

  @BelongsTo(() => EmployeeEntity)
  employee: EmployeeEntity;

  @HasMany(() => OrderItemEntity)
  order: OrderItemEntity[];
}