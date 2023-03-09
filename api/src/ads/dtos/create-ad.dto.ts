import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class CreateAdDto {
  @IsNotEmpty({ message: 'title is required!' })
  @ApiProperty()
  title: string

  @IsNotEmpty({ message: 'description is required!' })
  @ApiProperty()
  description: string

  @IsNumber({ allowNaN: false })
  @IsOptional()
  @ApiProperty({ required: false })
  oldPrice: number

  @IsNumber({ allowNaN: false })
  @IsOptional()
  @ApiProperty({ required: false })
  newPrice: number

  @IsDate({ message: 'fromDate must be valid date!' })
  @IsOptional()
  @ApiProperty({ required: false })
  fromDate: Date

  @IsDate({ message: 'toDate must be valid date and greater than today!' })
  @IsOptional()
  @ApiProperty({ required: false })
  toDate: Date

  @IsNumber({ allowNaN: false })
  @IsOptional()
  @ApiProperty({ required: false })
  discountPercent: number
}
