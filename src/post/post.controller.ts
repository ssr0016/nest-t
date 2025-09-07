import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';
import { ResponsePostDTO } from 'src/post/dtos/response-post.dto';
import { UpdatePostPatchDTO } from 'src/post/dtos/update-post-patch.dto';
import { UpdatePostDTO } from 'src/post/dtos/update-post.dto';
import { PostService } from 'src/post/post.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
@TransformDTO(ResponsePostDTO)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return this.postService.create(requestBody);
  }

  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.postService.getOne(id);
  }

  @Put(':id') // update all fields (PUT)
  update(@Param('id') id: string, @Body() requestBody: UpdatePostDTO) {
    return this.postService.update(id, requestBody);
  }

  @Patch(':id') // update partial or one field (PATCH)
  updateOne(@Param('id') id: string, @Body() requestBody: UpdatePostPatchDTO) {
    return this.postService.updateOne(id, requestBody);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.postService.deleteOne(id);
  }
}
