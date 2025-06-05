import { Inject, Injectable } from '@nestjs/common';
import { DishRatingEntity } from '../entities/dish-rating.entity';
import { DishRatingEntityInterface } from '../interfaces/dish-rating.interface';

@Injectable()
export class DishRatingRepository {
  constructor(
    @Inject('DISH_RATING_ENTITY')
    private readonly dishRatingEntity: typeof DishRatingEntity
  ) {}

  async create(rating: Omit<DishRatingEntityInterface, 'id'>): Promise<DishRatingEntityInterface> {
    return await this.dishRatingEntity.create(rating);
  }

  async getByDishAndUser(
    dishId: number,
    userId: number
  ): Promise<DishRatingEntityInterface | null> {
    return await this.dishRatingEntity.findOne({ where: { dishId, userId } });
  }

  async update(
    id: number,
    ratingData: Partial<Omit<DishRatingEntityInterface, 'id'>>
  ): Promise<DishRatingEntityInterface> {
    const rating = await this.dishRatingEntity.findByPk(id);
    return await rating.update(ratingData);
  }

  async listByDish(dishId: number): Promise<DishRatingEntityInterface[]> {
    return await this.dishRatingEntity.findAll({ where: { dishId } });
  }

  async delete(id: number): Promise<void> {
    const rating = await this.dishRatingEntity.findByPk(id);
    await rating.destroy();
  }
}
