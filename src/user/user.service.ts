import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfoDto } from './dto/UserInfo.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  async findByUsername(username: string): Promise<undefined | User> {
    return this.userRepository.findOne({ where: { username } });
  }

  async register(input: UserInfoDto): Promise<void> {
    const { password, ...rest } = input;
    const hashedPassword = await argon2.hash(password);
    await this.userRepository.save({ password: hashedPassword, ...rest });
  }
}
