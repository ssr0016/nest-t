import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { Post } from 'src/post/schemas/post.schemas';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    const post = await createdPost.save(); // real entity
    return post;
  }

  async getAll() {
    const posts = await this.postModel.find();
    return posts;
  }
}
