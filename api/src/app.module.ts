import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { getTypeormConfig } from './configs/typeorm.config'
import { AdsModule } from './ads/ads.module'
import { AuthModule } from './auth/auth.module'
import { join } from 'path'

const envFilePath = join(process.cwd(), `${process.env.NODE_ENV || ''}.env`)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath }),
    TypeOrmModule.forRootAsync({
      useFactory: getTypeormConfig,
      inject: [ConfigService]
    }),
    UsersModule,
    AdsModule,
    AuthModule
  ]
})
export class AppModule {}
