import { Module } from '@nestjs/common';
import { DishRepository } from './repositories/dish.repository';
import { databaseProvider } from './database.provider';
import { dishProvider } from './providers/dish.provider';
import { employeeProvider } from './providers/employee.provider';
import { orderProvider } from './providers/order.provider';
import { EmployeeRepository } from './repositories/employee.repository';
import { CompanyRepository } from './repositories/company.repository';
import { OrderRepository } from './repositories/order.repository';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { companyProvider } from './providers/company.provider';
import { restaurantProvider } from './providers/restaurant.provider';

@Module({
    providers:[
        CompanyRepository, 
        DishRepository, 
        EmployeeRepository, 
        OrderRepository, 
        RestaurantRepository, 
        ...companyProvider, 
        ...databaseProvider, 
        ...dishProvider, 
        ...employeeProvider, 
        ...orderProvider, 
        ...restaurantProvider
    ],
    exports:[
        CompanyRepository, 
        DishRepository, 
        EmployeeRepository, 
        OrderRepository, 
        RestaurantRepository
    ]
})
export class DatabaseModule {}
