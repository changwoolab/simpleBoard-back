import {
  Body,
  Controller,
  Get,
  Put,
  Param,
  Post,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { PagingDto } from 'src/common/paging.dto';
import { UserService } from 'src/user/user.service';
import { UserId } from 'src/utils/userId.decorator';
import { PostInput } from './dto/post.input';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Get('/')
  async getPostList(@Body() pagingDto: PagingDto): Promise<PostEntity[]> {
    return this.postService.getPostList(pagingDto);
  }

  @Get('/:id')
  async getPostDetail(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getOnePost(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async writePost(
    @Body() input: PostInput,
    @UserId() userId: number,
  ): Promise<void> {
    await this.postService.writePost(input, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async updatePost(
    @Param('id') postId: number,
    @UserId() userId: number,
    @Body() updatePostInput: PostInput,
  ): Promise<void> {
    const post = await this.postService.getOnePost(postId);
    if (post.userId != userId) throw new ForbiddenException();

    await this.postService.updatePost(postId, updatePostInput);
  }
}
