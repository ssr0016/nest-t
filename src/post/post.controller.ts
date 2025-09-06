import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { ResponsePostDto } from 'src/post/dtos/response-post.dto';
import { PostService } from 'src/post/post.service';

@Controller('posts') // REST
@TransformDTO(ResponsePostDto)
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
