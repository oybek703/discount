import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '../users/user.entity'
import { Category } from '../ads/entities/category.entity'
import { Ad } from '../ads/entities/ad.entity'
import { Location } from '../ads/entities/location.entity'

export const getTypeormConfig = async (
  configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  database: configService.get('DB_NAME'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  entities: [User, Location, Category, Ad],
  synchronize: configService.get('NODE_ENV') === 'development'
})
