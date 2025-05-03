// Arquivo: src/entities/empresa-usuario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { UserEntity as UserEntity } from './user.entity';

@Table({
  tableName: 'Empresa_Usuario',
  timestamps: false,
})
export class CompanyUserEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => CompanyEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Empresa',
  })
  idEmpresa: number;

  @PrimaryKey
  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Usuario',
  })
  idUsuario: number;
}