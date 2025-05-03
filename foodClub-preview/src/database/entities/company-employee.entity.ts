// Arquivo: src/entities/empresa-funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';

@Table({
  tableName: 'EmpresaFuncionario',
  timestamps: false,
})
export class CompanyEmployeeEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => CompanyEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Empresa',
  })
  empresaId: number;

  @PrimaryKey
  @ForeignKey(() => EmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Funcionario',
  })
  funcionarioId: number;
}