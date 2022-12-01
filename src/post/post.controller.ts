import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagingDto } from 'src/common/paging.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/')
  async getPostList(@Body() pagingDto: PagingDto): Promise<PostEntity[]> {
    return this.postService.getPostList(pagingDto);
  }

  @Get('/:id')
  async getPostDetail(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getPostDetail(id);
  }
}
