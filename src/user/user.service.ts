import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  async findByUsername(username: string): Promise<undefined | User> {
    return this.userRepository.findOne({ where: { username } });
  }
}
