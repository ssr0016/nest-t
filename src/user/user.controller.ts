import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';
import { ResponsePostDTO } from 'src/post/dtos/response-post.dto';

@Controller('users')
@TransformDTO(ResponsePostDTO)
export class UserController {
  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return 'post';
  }

  @Get()
  getAll() {
    return 'get';
  }
}
