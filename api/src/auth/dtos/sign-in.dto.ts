import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class SignInDto {
  @IsNotEmpty({ message: 'username is required!' })
  @ApiProperty()
  username: string

  @IsNotEmpty({ message: 'password is required!' })
  @ApiProperty()
  password: string
}
