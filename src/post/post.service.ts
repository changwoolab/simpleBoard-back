import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingDto } from 'src/common/paging.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: PostRepository,
  ) {}

  getPostList(pagingDto: PagingDto): Promise<PostEntity[]> {
    const { page, count } = pagingDto;
    const realPage = Math.max(1, page) - 1; // 최소 1페이지
    const realCount = Math.max(10, count); // 최소 10페이지

    return this.postRepository.getPosts(realPage * realCount, realCount);
  }
}
