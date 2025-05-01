import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CompanyTypeOrmEntity } from './company.typeorm-entity';

@Entity('employees')
export class EmployeeTypeOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  companyId: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  department: string;

  @ManyToOne(() => CompanyTypeOrmEntity, company => company.employees)
  @JoinColumn({ name: 'companyId' })
  company: CompanyTypeOrmEntity;
}