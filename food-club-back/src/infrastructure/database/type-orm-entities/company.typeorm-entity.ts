import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { EmployeeTypeOrmEntity } from './employee.typeorm-entity';

@Entity('companies')
export class CompanyTypeOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  logo: string;

  @OneToMany(() => EmployeeTypeOrmEntity, (employee) => employee.company)
  employees: EmployeeTypeOrmEntity[];
}
