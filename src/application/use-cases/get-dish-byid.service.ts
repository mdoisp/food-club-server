import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../../domain/models/dish.interface';
import { DishRepository } from '../../infrastructure/database/repositories/dish.repository';
import { DishRatingRepository } from 'src/infrastructure/database/repositories/dish-rating.repository';
import { DishRatingEntityInterface } from 'src/domain/repositories/dish-rating.interface';
import { EmployeeRepository } from '../../infrastructure/database/repositories/employee.repository';

@Injectable()
export class GetDishByIdService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository,
    @Inject('DISH_RATING_REPOSITORY')
    private readonly dishRatingRepository: DishRatingRepository,
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository
  ){}
  async execute(id: number): Promise<any> {
     const dish = await this.dishRepository.getById(id);
     const ratings = await this.dishRatingRepository.listByDish(dish.id);
     const ratingCount = ratings.length;
     const averageRating = ratingCount > 0 ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratingCount : 0;
     const ratingsWithEmployeeName = await Promise.all(ratings.map(async r => {
       let employeeName = 'Usuário';
       if (r.userId) {
        console.log('r.userId', r.userId);
         const employee = await this.employeeRepository.findByUserId(r.userId);
         console.log('employee', employee);
         if (employee && employee.name) employeeName = employee.name;
       }
       return {
         name: employeeName,
         rating: r.rating,
         profileImage: r.user?.profileImage || null,
         comment: r.comment || null,
       };
     }));
     return {
      restaurantId: dish.restaurantId,
      name: dish.name,
      description: dish.description,
      price: dish.price,
      image: dish.image,
      averageRating: Number(averageRating.toFixed(2)),
      ratingCount,
      ratings: ratingsWithEmployeeName,
     };
  }
}
