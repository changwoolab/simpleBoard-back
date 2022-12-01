import { Body, Controller, Get } from '@nestjs/common';
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
}
