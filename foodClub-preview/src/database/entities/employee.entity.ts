// Arquivo: src/entities/funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne, DataType } from 'sequelize-typescript';
import { OrderEmployeeEntity } from './order-employee.entity';
import { EmployeeUserEntity } from './employee-user.entity';
import { CompanyEmployeeEntity } from './company-employee.entity';

@Table({
  tableName: 'Funcionario',
  timestamps: false,
})
export class EmployeeEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Funcionario',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Funcionario',
  })
  nomeFuncionario: string;

  @HasMany(() => OrderEmployeeEntity)
  pedidos: OrderEmployeeEntity[];

  @HasOne(() => EmployeeUserEntity)
  usuario: EmployeeUserEntity;

  @HasOne(() => CompanyEmployeeEntity)
  empresa: CompanyEmployeeEntity;
}