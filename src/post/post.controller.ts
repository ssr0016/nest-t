import { Controller, Post } from '@nestjs/common';
import { PostService } from 'src/post/post.service';

@Controller('posts') // REST
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create() {
    return this.postService.create();
  }
}
