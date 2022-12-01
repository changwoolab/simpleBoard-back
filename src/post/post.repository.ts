import type { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

export interface PostRepository extends Repository<PostEntity> {}

export const PostRepositoryMethods: Pick<PostRepository, null> = {};
