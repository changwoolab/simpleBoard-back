import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryProvider } from 'src/utils/RepositoryProvider';
import { PostController } from './post.controller';
import { PostEntity } from './post.entity';
import { PostRepositoryMethods } from './post.repository';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [
    PostService,
    RepositoryProvider(PostEntity, PostRepositoryMethods),
  ],
})
export class PostModule {}
