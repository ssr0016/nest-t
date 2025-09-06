import { Controller, Post, Body } from '@nestjs/common';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { PostService } from 'src/post/post.service';

@Controller('posts') // REST
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDto) {
    return this.postService.create(requestBody);
  }
}
