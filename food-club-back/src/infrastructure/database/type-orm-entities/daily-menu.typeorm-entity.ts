import { DishTypeOrmEntity } from './dish.typeorm-entity';

export class DailyMenuTypeOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column('date')
  date: Date;

  @Column()
  restaurantId: string;

  @Column()
  companyId: string;

  @ManyToMany(() => DishTypeOrmEntity)
  @JoinTable({
    name: 'daily_menu_dishes',
    joinColumn: { name: 'daily_menu_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'dish_id', referencedColumnName: 'id' },
  })
  dishes: DishTypeOrmEntity[];
}
