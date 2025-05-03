// Arquivo: src/entities/funcionario-usuario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';
import { UserEntity as UserEntity } from './order.entity';

@Table({
  tableName: 'Funcionario_Usuario',
  timestamps: false,
})
export class EmployeeUserEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => EmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Funcionario',
  })
  idFuncionario: number;

  @PrimaryKey
  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Usuario',
  })
  idUsuario: number;
}