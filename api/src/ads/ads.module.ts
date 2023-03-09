import { Module } from '@nestjs/common'
import { AdsService } from './ads.service'
import { AdsController } from './ads.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Ad } from './entities/ad.entity'
import { Location } from './entities/location.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Location, Category, Ad])],
  providers: [AdsService],
  controllers: [AdsController]
})
export class AdsModule {}
