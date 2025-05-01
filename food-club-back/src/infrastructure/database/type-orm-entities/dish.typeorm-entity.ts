import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { DishCategory } from '../../../domain/entities/dish.entity';
import { RestaurantTypeOrmEntity } from './restaurant.typeorm-entity';

@Entity('dishes')
export class DishTypeOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({
    type: 'enum',
    enum: DishCategory,
  })
  category: DishCategory;

  @Column({ nullable: true })
  image: string;

  @Column('simple-array')
  ingredients: string[];

  @Column()
  restaurantId: string;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(
    () => RestaurantTypeOrmEntity,
    (restaurant: { dishes: [] }) => restaurant.dishes,
  )
  @JoinColumn({ name: 'restaurantId' })
  restaurant: RestaurantTypeOrmEntity;
}
