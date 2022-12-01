import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryProvider } from 'src/utils/RepositoryProvider';
import { User } from './user.entity';
import { UserRepositoryMethods } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, RepositoryProvider(User, UserRepositoryMethods)],
  exports: [UserService],
})
export class UserModule {}
