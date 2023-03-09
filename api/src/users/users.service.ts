import { BadRequestException, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { SignUpDto } from '../auth/dtos/sign-up.dto'
import { genSalt, hash } from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findOne(username: string) {
    return this.userRepository.findOne({ where: { username } })
  }

  async findOneById(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } })
  }

  async createOne(body: SignUpDto) {
    const { username, firstName, lastName, password } = body
    const existingUser = await this.userRepository.exist({
      where: { username }
    })
    if (existingUser)
      throw new BadRequestException({ message: 'User already exists!' })
    const newUser = new User()
    newUser.username = username
    newUser.first_name = firstName
    newUser.last_name = lastName
    const salt = await genSalt(10)
    newUser.password = await hash(password, salt)
    await this.userRepository.save(newUser)
    return newUser
  }
}
