import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserByEmailService } from './get-byemail.service';
import { UserInterface } from '../user.interface';
import { CompanyRepository } from 'src/database/repositories/company.repository';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class AuthService {
  constructor(
    private GetUserByEmailService: GetUserByEmailService,
    private companyRepository: CompanyRepository,
    private restaurantRepository: RestaurantRepository,
    private employeeRepository: EmployeeRepository
  ) {}

  private activeSessions: Record<string, { userId: number, expiresAt: Date }> = {};

  async login(email: string, password: string): Promise<{ token: string, userDetails: any }> {
    const user = await this.GetUserByEmailService.execute(email);
    
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = Math.random().toString(36).substring(2) + 
                  Date.now().toString(36);
    
    this.activeSessions[token] = {
      userId: user.id,
      expiresAt: new Date(Date.now() + 3600 * 1000) 
    };

    const userDetails = await this.getUserDetails(user);

    return { token, userDetails };
  }

  async validateToken(token: string): Promise<number> {
    const session = this.activeSessions[token];
    
    if (!session || new Date() > session.expiresAt) {
      throw new UnauthorizedException('Sessão inválida ou expirada');
    }

    return session.userId;
  }

  logout(token: string): void {
    delete this.activeSessions[token];
  }

  private async getUserDetails(user: UserInterface) {
    switch (user.userType) {
      case 'company':
        const company = await this.companyRepository.findByUserId(user.id);
        return {
          ...user,
          company,
        };
      case 'employee':
        const employee = await this.employeeRepository.findByUserId(user.id);
        return {
          ...user,
          employee,
        };
      case 'restaurant':
        const restaurant = await this.restaurantRepository.findByUserId(user.id);
        return {
          ...user,
          restaurant,
        };
      default:
        return user;
    }
  }
}