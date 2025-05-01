// Arquivo: src/entities/funcionario-usuario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { FuncionarioEntity } from './funcionario.entity';
import { UsuarioEntity } from './usuario.entity';

@Table({
  tableName: 'Funcionario_Usuario',
  timestamps: false,
})
export class FuncionarioUsuarioEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => FuncionarioEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Funcionario',
  })
  funcionarioId: number;

  @PrimaryKey
  @ForeignKey(() => UsuarioEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Usuario',
  })
  usuarioId: number;
}