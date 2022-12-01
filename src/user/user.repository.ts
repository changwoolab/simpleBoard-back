import type { Repository } from 'typeorm';
import { User } from './user.entity';

export interface UserRepository extends Repository<User> {}

export const UserRepositoryMethods: Pick<UserRepository, null> = {};
