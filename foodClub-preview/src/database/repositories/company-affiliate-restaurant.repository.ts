// repositories/
import { Inject, Injectable } from '@nestjs/common';
import { CompanyAffiliateRestaurantEntityInterface } from '../interfaces/company-affiliate-restaurant.interface';
import { CompanyAffiliateRestaurantEntity } from '../entities/restaurant-dish.entity';

@Injectable()
export class CompanyAffiliateRestaurantRepository {
  constructor(
    @Inject('COMPANY_AFFILIATE_RESTAURANT_ENTITY')
    private readonly affiliateRestaurantEntity: typeof CompanyAffiliateRestaurantEntity,
  ) {}

  async create(affiliation: Omit<CompanyAffiliateRestaurantEntityInterface, 'id'>): Promise<CompanyAffiliateRestaurantEntityInterface> {
    return await this.affiliateRestaurantEntity.create(affiliation);
  }

  async listByCompany(companyId: number): Promise<CompanyAffiliateRestaurantEntityInterface[]> {
    return await this.affiliateRestaurantEntity.findAll({ where: { companyId } });
  }

  async listByRestaurant(restaurantId: number): Promise<CompanyAffiliateRestaurantEntityInterface[]> {
    return await this.affiliateRestaurantEntity.findAll({ where: { restaurantId } });
  }

  async delete(companyId: number, restaurantId: number): Promise<void> {
    await this.affiliateRestaurantEntity.destroy({ 
      where: { companyId, restaurantId } 
    });
  }

  async findAffiliation(companyId: number, restaurantId: number): Promise<CompanyAffiliateRestaurantEntityInterface | null> {
    return await this.affiliateRestaurantEntity.findOne({ 
      where: { companyId, restaurantId } 
    });
  }
}