import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';
import { ResponsePostDTO } from 'src/post/dtos/response-post.dto';

@ApiTags('users')
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
