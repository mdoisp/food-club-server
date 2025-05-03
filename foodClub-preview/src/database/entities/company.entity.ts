import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { CompanyEntityInterface } from '../interfaces/company.interface';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';

@Table({ tableName: 'Company' })
export class CompanyEntity extends Model implements CompanyEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    field: 'IdEmpresa'
  })
  idEmpresa: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'NomeEmpresa'
  })
  nomeEmpresa: string;

  @Column({ type: DataType.STRING(100), field: 'Rua' })
  rua: string;

  @Column({ type: DataType.STRING(20), field: 'CNPJ' })
  cnpj: string;

  @Column({ type: DataType.STRING(10), field: 'CEP' })
  cep: string;

  @Column({ type: DataType.STRING(10), field: 'Numero' })
  numero: string;

  @Column({ type: DataType.STRING(50), field: 'Cidade' })
  cidade: string;

  @Column({ type: DataType.STRING(2), field: 'Estado' })
  estado: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  fone: string;

  @Column({ type: DataType.STRING(100), allowNull: false, unique: true })
  email: string;

  @HasMany(() => EmployeeEntity)
  funcionarios: EmployeeEntity[];
}