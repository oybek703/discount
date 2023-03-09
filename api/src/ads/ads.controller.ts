import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common'
import { AdsService } from './ads.service'
import { CreateAdDto } from './dtos/create-ad.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../auth/guards/jwt.guard'

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @ApiTags('Ads')
  @Get('categories')
  async categories() {
    return this.adsService.getAllCategories()
  }

  @ApiTags('Ads')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createAd(@Body() body: CreateAdDto) {
    return this.adsService.createAd(body)
  }
}
