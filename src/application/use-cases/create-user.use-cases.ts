import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { UserInterface } from '../../domain/models/user.model';
import { AuthService } from './login.use-cases';
import { CreateEmployeeService } from './create-employee.use-cases';
import { CreateCompanyService } from './create-company.use-cases';
import { CreateRestaurantService } from './create-restaurant.use-cases';
import { EmployeeInterface } from 'src/domain/models/employee.model';

@Injectable()
export class CreateUserService {
    constructor(
        private userRepository: UserRepository,
        private authService: AuthService,
        private createEmployeeService: CreateEmployeeService,
        private createCompanyService: CreateCompanyService,
        private createRestaurantService: CreateRestaurantService,
    ) {}

    async execute(data: UserInterface): Promise<UserInterface> {
        data.password = await this.authService.hashPassword(data.password);
        if(data.userType === 'employee'){
            console.log('dataemployee',data);
            const validate = await this.createEmployeeService.validateUserCreateEmployee({
                id: undefined,
                name: data.employee.name,
                cpf: data.cpf,
                companyId: data.company.id,
                userId: data.id,
                birthDate: data.employee.birthDate,
            } as EmployeeInterface);
            console.log('validate',validate);
            if (!validate) {
                throw new BadRequestException('CPF já cadastrado');
            }
        }
        if(data.userType === 'company'){
            console.log('data.company',data.company);
            const validate = await this.createCompanyService.validateUserCreateCompany({
                id: undefined,
                name: data.company.name,
                cnpj: data.cnpj,
                userId: data.id,
                cep: data.company.cep,
                number: data.company.number,
                restaurantId: data.company.restaurantId,
            });
            console.log('validate',validate);
            if (!validate) {
                throw new BadRequestException('CNPJ já cadastrado');
            }
        }
        if(data.userType === 'restaurant'){
            await this.createRestaurantService.validateUserCreateRestaurant({
                id: undefined,
                name: data.restaurant.name,
                cnpj: data.cnpj,
                userId: data.id,
                cep: data.restaurant.cep,
                rua: data.restaurant.rua,
                cidade: data.restaurant.cidade,
                estado: data.restaurant.estado,
                number: data.restaurant.number,
                complemento: data.restaurant.complemento,
            });
        }
        console.log('dataS',data);
        const user = await this.userRepository.create(data);
        console.log('user',user);
        data.id = user.id;
        
        if(data.userType === 'employee'){
            await this.createEmployeeService.execute({
                id: undefined,
                name: data.employee.name,
                cpf: data.cpf,
                companyId: data.company.id,
                userId: data.id,
                birthDate: data.employee.birthDate,
                vacation: data.employee.vacation,
            });
        }
        if(data.userType === 'company'){
            await this.createCompanyService.execute({
                id: undefined,
                name: data.company.name,
                cnpj: data.cnpj,
                userId: data.id,
                cep: data.company.cep,
                number: data.company.number,
                restaurantId: data.company.restaurantId,
            });
        }
        if(data.userType === 'restaurant'){
            await this.createRestaurantService.execute({
                id: undefined,
                name: data.restaurant.name,
                cnpj: data.cnpj,
                userId: data.id,
                cep: data.restaurant.cep,
                rua: data.restaurant.rua,
                cidade: data.restaurant.cidade,
                estado: data.restaurant.estado,
                number: data.restaurant.number,
                complemento: data.restaurant.complemento,
            });
        }
        return data;
    }
}