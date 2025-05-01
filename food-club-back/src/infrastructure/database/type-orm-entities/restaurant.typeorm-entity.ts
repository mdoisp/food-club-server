import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { DishTypeOrmEntity } from './dish.typeorm-entity';

@Entity('restaurants')
export class RestaurantTypeOrmEntity {
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

  @OneToMany(() => DishTypeOrmEntity, (dish) => dish.restaurant)
  dishes: DishTypeOrmEntity[];
}
