import { Inject, Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../../domain/models/employee.model';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepository
  ) {}
  async execute(id: number, employeeData: EmployeeInterface): Promise<EmployeeInterface> {
    this.userRepository.updateImage(employeeData.userId, {profileImage: employeeData.profileImage});
    return await this.employeeRepository.update(id, employeeData);
  }
}