import { Module } from '@nestjs/common';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { UserRepositoryMethods } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    {
      provide: getRepositoryToken(User),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(User).extend(UserRepositoryMethods);
      },
    },
  ],
  exports: [UserService],
})
export class UserModule {}
