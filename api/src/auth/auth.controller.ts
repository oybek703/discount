import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SignInDto } from './dtos/sign-in.dto'
import { SignUpDto } from './dtos/sign-up.dto'
import { UsersService } from '../users/users.service'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @ApiTags('Auth')
  @Post('signIn')
  async signIn(@Body() body: SignInDto) {
    const { userId } = await this.authService.validateUser(body)
    return this.authService.generateToken(userId)
  }

  @ApiTags('Auth')
  @HttpCode(HttpStatus.CREATED)
  @Post('signUp')
  async signUp(@Body() body: SignUpDto) {
    return this.authService.createUser(body)
  }
}
