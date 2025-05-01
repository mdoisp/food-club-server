// Arquivo: src/entities/empresa-usuario.entity.ts
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from 'sequelize-typescript';
import { EmpresaEntity } from './empresa.entity';
import { UsuarioEntity } from './usuario.entity';

@Table({
  tableName: 'Empresa_Usuario',
  timestamps: false,
})
export class EmpresaUsuarioEntity extends Model {
  @PrimaryKey
  @ForeignKey(() => EmpresaEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Empresa',
  })
  empresaId: number;

  @PrimaryKey
  @ForeignKey(() => UsuarioEntity)
  @Column({
    type: DataType.INTEGER,
    field: 'ID_Usuario',
  })
  usuarioId: number;
}