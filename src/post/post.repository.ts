import type { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

export interface PostRepository extends Repository<PostEntity> {
  getPosts(skip: number, take: number): Promise<PostEntity[]>;
}

export const PostRepositoryMethods: Pick<PostRepository, null> = {
  getPosts(this: Repository<PostEntity>, skip: number, take: number) {
    return this.find({
      skip,
      take,
    });
  },
};
