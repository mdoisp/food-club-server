import { CompanyAffiliateRestaurantEntity } from '../entities/restaurant-dish.entity';
import { CompanyAffiliateRestaurantRepository } from '../repositories/company-affiliate-restaurant.repository';

export const companyAffiliateRestaurantProvider = [
  {
    provide: 'COMPANY_AFFILIATE_RESTAURANT_ENTITY',
    useValue: CompanyAffiliateRestaurantEntity,
  },
  {
    provide: 'COMPANY_AFFILIATE_RESTAURANT_REPOSITORY',
    useClass: CompanyAffiliateRestaurantRepository,
  },
];