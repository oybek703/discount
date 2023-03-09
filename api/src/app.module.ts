import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { getTypeormConfig } from './configs/typeorm.config'
import { AdsModule } from './ads/ads.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
