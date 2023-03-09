import { BadRequestException, Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { compare } from 'bcrypt'
import { SignInDto } from './dtos/sign-in.dto'
import { JwtService } from '@nestjs/jwt'
import { SignUpDto } from './dtos/sign-up.dto'
import { INVALID_CREDENTIALS_ERROR } from './constants'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser({ username, password }: SignInDto) {
    const user = await this.usersService.findOne(username)
    if (!user)
      throw new BadRequestException({ message: INVALID_CREDENTIALS_ERROR })
    const isValidPassword = await compare(password, user.password)
    if (isValidPassword)
      return {
        userId: user.id
      }
    else throw new BadRequestException({ message: INVALID_CREDENTIALS_ERROR })
  }

  async createUser(body: SignUpDto) {
    const { id } = await this.usersService.createOne(body)
    return this.generateToken(id)
  }

  generateToken(userId: number) {
    return {
      accessToken: this.jwtService.sign({ userId })
    }
  }
}
