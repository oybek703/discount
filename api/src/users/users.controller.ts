import { Controller, Get, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../auth/guards/jwt.guard'
import { UserData } from '../decorators/user.decorator'
import { IJwtPayload } from '../common/interfaces/jwt.interface'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiTags('Users')
  @Get('me')
  async getMe(@UserData() { userId }: IJwtPayload) {
    const user = await this.usersService.findOneById(userId)
    return {
      ...user,
      password: undefined
    }
  }
}
