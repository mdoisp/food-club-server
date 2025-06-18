import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { UserInterface } from '../../domain/models/user.interface';
import { AuthService } from './login.service';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { CreateEmployeeService } from './create-employee.service';

@Injectable()
export class CreateUserService {
    constructor(
        private userRepository: UserRepository,
        private authService: AuthService,
        private createEmployeeService: CreateEmployeeService,
        private companyRepository: CompanyRepository,
        private restaurantRepository: RestaurantRepository,
    ) {}

    async execute(data: UserInterface): Promise<UserInterface> {
        data.password = await this.authService.hashPassword(data.password);
        if(data.userType === 'employee'){
            await this.createEmployeeService.execute({
                id: undefined,
                name: data.employee.name,
                cpf: data.cpf,
                companyId: data.company.id,
                userId: data.id,
                birthDate: data.employee.birthDate,
            });
        }
        if(data.userType === 'company'){
            const company = await this.companyRepository.list();
            const existingCompany = company.find(c => c.cnpj === data.cnpj);
            if(existingCompany){
                throw new BadRequestException('CNPJ já cadastrado');
            }
        }
        if(data.userType === 'restaurant'){
            const restaurant = await this.restaurantRepository.list();
            const existingRestaurant = restaurant.find(r => r.cnpj === data.cnpj);
            if(existingRestaurant){
                throw new BadRequestException('CNPJ já cadastrado');
            }
        }
        
        return this.userRepository.create(data);
    }
}