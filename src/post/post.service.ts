import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingDto } from 'src/common/paging.dto';
import { PostInput } from './dto/post.input';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: PostRepository,
  ) {}

  async getPostList(pagingDto: PagingDto): Promise<PostEntity[]> {
    const { page, count } = pagingDto;
    const realPage = Math.max(1, page) - 1; // 최소 1페이지
    const realCount = Math.max(10, count); // 최소 10페이지

    return this.postRepository.getPosts(realPage * realCount, realCount);
  }

  async getOnePost(id: number): Promise<PostEntity> {
    return this.postRepository.findOne({ where: { id } });
  }

  async writePost(input: PostInput, userId: number): Promise<void> {
    await this.postRepository.save({ ...input, userId });
  }

  async updatePost(postId: number, updatePostInput: PostInput): Promise<void> {
    await this.postRepository.update(postId, { ...updatePostInput });
  }
}
