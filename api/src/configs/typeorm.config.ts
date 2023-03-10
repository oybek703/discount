import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '../users/user.entity'
import { Category } from '../ads/entities/category.entity'
import { Ad } from '../ads/entities/ad.entity'
import { Location } from '../ads/entities/location.entity'

export const getTypeormConfig = async (
  configService: ConfigService
): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'postgres',
    database: configService.get('PGDATABASE'),
    host: configService.get('PGHOST'),
    password: configService.get('PGPASSWORD'),
    port: configService.get('PGPORT'),
    username: configService.get('PGUSER'),
    entities: [User, Location, Category, Ad],
    synchronize: configService.get('NODE_ENV') === 'development'
  }
}
