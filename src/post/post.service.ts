import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/post/dtos/create-post.dto';
import { UpdatePostDto } from 'src/post/dtos/update-post.dto';
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

  async getOne(id: string) {
    const post = await this.postModel.findOne({ _id: id });

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return post;
  }

  async update(id: string, requestBody: UpdatePostDto) {
    const post = await this.getOne(id);

    post.title = requestBody.title;
    post.description = requestBody.description;

    return post.save();
  }
}
