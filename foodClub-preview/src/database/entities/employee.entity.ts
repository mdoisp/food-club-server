// Arquivo: src/entities/funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne, DataType } from 'sequelize-typescript';
import { EmployeeOrderEntity } from './employee-order.entity';
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
  idFuncionario: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Funcionario',
  })
  nomeFuncionario: string;

  @HasMany(() => EmployeeOrderEntity)
  pedidos: EmployeeOrderEntity[];

  @HasOne(() => EmployeeUserEntity)
  usuario: EmployeeUserEntity;

  @HasOne(() => CompanyEmployeeEntity)
  empresa: CompanyEmployeeEntity;
}