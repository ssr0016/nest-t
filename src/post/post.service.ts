import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { ResponsePostDto } from 'src/post/dtos/response-post.dto';
import { Post } from 'src/post/schemas/post.schemas';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<ResponsePostDto> {
    const createdPost = new this.postModel(createPostDto);
    const post = await createdPost.save();

    const postDto = new ResponsePostDto();
    postDto._id = post._id.toString();
    postDto.title = post.title;
    postDto.description = post.description;

    return postDto;
  }
}
