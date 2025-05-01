// Arquivo: src/entities/usuario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, DataType } from 'sequelize-typescript';
import { FuncionarioUsuarioEntity } from './funcionario-usuario.entity';
import { EmpresaUsuarioEntity } from './empresa-usuario.entity';

@Table({
  tableName: 'Usuario',
  timestamps: false,
})
export class UsuarioEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Usuario',
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: 'Tipo_Usuario',
  })
  tipoUsuario: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Senha',
  })
  senha: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
    allowNull: false,
    field: 'Email',
  })
  email: string;

  @HasOne(() => FuncionarioUsuarioEntity)
  funcionario: FuncionarioUsuarioEntity;

  @HasOne(() => EmpresaUsuarioEntity)
  empresa: EmpresaUsuarioEntity;

}