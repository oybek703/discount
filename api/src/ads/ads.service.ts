import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Ad } from './entities/ad.entity'
import { Repository } from 'typeorm'
import { Category } from './entities/category.entity'
import { CreateAdDto } from './dtos/create-ad.dto'

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(Ad) private readonly adRepository: Repository<Ad>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async getAllCategories() {
    return this.categoryRepository.find()
  }

  async createAd(dto: CreateAdDto) {
    console.log(dto)
    return 'CREATE AD'
  }
}
