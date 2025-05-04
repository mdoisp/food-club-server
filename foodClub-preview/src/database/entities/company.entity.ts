import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { CompanyEntityInterface } from '../interfaces/company.interface';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';

@Table({ 
  tableName: 'Company',
  timestamps: false
 })
export class CompanyEntity extends Model implements CompanyEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    field: 'idEmpresa'
  })
  idEmpresa: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'nomeEmpresa'
  })
  nomeEmpresa: string;

  @Column({ type: DataType.STRING(100), field: 'rua' })
  rua: string;

  @Column({ type: DataType.STRING(20), field: 'cnpj' })
  cnpj: string;

  @Column({ type: DataType.STRING(10), field: 'cep' })
  cep: string;

  @Column({ type: DataType.STRING(10), field: 'numero' })
  numero: string;

  @Column({ type: DataType.STRING(50), field: 'cidade' })
  cidade: string;

  @Column({ type: DataType.STRING(2), field: 'estado' })
  estado: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  fone: string;

  @Column({ type: DataType.STRING(100), allowNull: false, unique: true })
  email: string;

  @HasMany(() => EmployeeEntity)
  funcionarios: EmployeeEntity[];
}