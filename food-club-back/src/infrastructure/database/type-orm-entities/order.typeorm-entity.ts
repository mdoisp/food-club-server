import { Entity, Column, PrimaryColumn } from 'typeorm';
import { OrderStatus } from '../../../domain/entities/order.entity';

@Entity('orders')
export class OrderTypeOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  employeeId: string;

  @Column()
  dishId: string;

  @Column('datetime')
  date: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({ nullable: true })
  comments: string;
}
