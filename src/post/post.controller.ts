import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { PagingDto } from 'src/common/paging.dto';
import { UserId } from 'src/utils/userId.decorator';
import { PostInput } from './dto/post.input';
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

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async writePost(
    @Body() input: PostInput,
    @UserId() userId: number,
  ): Promise<void> {
    await this.postService.writePost(input, userId);
  }
}
