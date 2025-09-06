import { Controller, Post, Body, Get, UseInterceptors } from '@nestjs/common';
import { TransformDtoInterceptor } from 'src/interceptors/transform-dto.interceptors';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { PostService } from 'src/post/post.service';

@Controller('posts') // REST
@UseInterceptors(TransformDtoInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDto) {
    return this.postService.create(requestBody);
  }

  @Get()
  getAll() {
    return this.postService.getAll();
  }
}
