// Arquivo: src/entities/funcionario.entity.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne, DataType } from 'sequelize-typescript';
import { PedidoFuncionarioEntity } from './pedido-funcionario.entity';
import { FuncionarioUsuarioEntity } from './funcionario-usuario.entity';
import { EmpresaFuncionarioEntity } from './empresa-funcionario.entity';

@Table({
  tableName: 'Funcionario',
  timestamps: false,
})
export class FuncionarioEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ID_Funcionario',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'Nome_Funcionario',
  })
  nomeFuncionario: string;

  @HasMany(() => PedidoFuncionarioEntity)
  pedidos: PedidoFuncionarioEntity[];

  @HasOne(() => FuncionarioUsuarioEntity)
  usuario: FuncionarioUsuarioEntity;

  @HasOne(() => EmpresaFuncionarioEntity)
  empresa: EmpresaFuncionarioEntity;
}