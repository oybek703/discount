import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from '../configs/jwt.config'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    PassportModule
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
