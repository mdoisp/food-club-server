// Arquivo: src/entities/empresa.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne, DataType } from 'sequelize-typescript';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';
import { CompanyUserEntity } from './company-user.entity';
import { OrderCompanyEntity as OrderCompanyEntity } from './order-company.entity';

@Table({
  tableName: 'Empresa',
  timestamps: false,
})
export class CompanyEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Empresa',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Empresa',
  })
  nomeEmpresa: string;

  @Column({
    type: DataType.STRING(100),
    field: 'Rua',
  })
  rua: string;

  @Column({
    type: DataType.STRING(20),
    unique: true,
    field: 'CNPJ',
  })
  cnpj: string;

  @Column({
    type: DataType.STRING(10),
    field: 'CEP',
  })
  cep: string;

  @Column({
    type: DataType.STRING(10),
    field: 'Numero',
  })
  numero: string;

  @Column({
    type: DataType.STRING(50),
    field: 'Cidade',
  })
  cidade: string;

  @Column({
    type: DataType.STRING(2),
    field: 'Estado',
  })
  estado: string;

  @HasMany(() => EmployeeEntity)
  funcionarios: EmployeeEntity[];

  @HasMany(() => CompanyUserEntity)
  usuarios: CompanyUserEntity[];

  @HasMany(() => OrderCompanyEntity)
  pedidos: OrderCompanyEntity[];
}