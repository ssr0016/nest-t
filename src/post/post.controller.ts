import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import type { PostDocument } from 'src/post/schemas/post.schemas';

@Controller('posts') // REST
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: PostDocument) {
    return this.postService.create(requestBody);
  }
}
