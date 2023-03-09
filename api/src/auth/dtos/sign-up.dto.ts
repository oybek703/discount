import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class SignUpDto {
  @IsNotEmpty({ message: 'username is required!' })
  @ApiProperty()
  username: string

  @IsNotEmpty({ message: 'firstName is required!' })
  @ApiProperty()
  firstName: string

  @ApiProperty({ required: false })
  lastName: string

  @Length(6, 15, { message: 'password length must be between 6 and 15!' })
  @ApiProperty()
  password: string
}
