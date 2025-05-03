// Arquivo: src/entities/usuario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, DataType } from 'sequelize-typescript';
import { EmployeeUserEntity } from './employee-user.entity';
import { CompanyUserEntity } from './company-user.entity';

@Table({
  tableName: 'Usuario',
  timestamps: false,
})
export class UserEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Usuario',
  })
  idUsuario: number;

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

  @HasOne(() => EmployeeUserEntity)
  funcionario: EmployeeUserEntity;

  @HasOne(() => CompanyUserEntity)
  empresa: CompanyUserEntity;

}