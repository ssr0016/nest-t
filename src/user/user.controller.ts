import { Controller, Post, Body, Get, Version } from '@nestjs/common';
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
    console.log(requestBody);
    return 'post';
  }

  @Get()
  getAll() {
    return 'get';
  }

  @Version('2')
  @Get()
  getAllV2() {
    return 'get v2';
  }
}
