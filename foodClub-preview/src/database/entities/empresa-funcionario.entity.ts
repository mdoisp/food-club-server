// Arquivo: src/entities/empresa-funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { EmpresaEntity } from './empresa.entity';
import { FuncionarioEntity } from './funcionario.entity';

@Table({
  tableName: 'EmpresaFuncionario',
  timestamps: false,
})
export class EmpresaFuncionarioEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => EmpresaEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Empresa',
  })
  empresaId: number;

  @PrimaryKey
  @ForeignKey(() => FuncionarioEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Funcionario',
  })
  funcionarioId: number;
}