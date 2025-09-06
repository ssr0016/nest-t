import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { ResponsePostDto } from 'src/post/dtos/response-post.dto';
import { UpdatePostDto } from 'src/post/dtos/update-post.dto';
import { PostService } from 'src/post/post.service';

@Controller('posts')
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

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return this.postService.getOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() requestBody: UpdatePostDto) {
    return this.postService.update(id, requestBody);
  }
}
