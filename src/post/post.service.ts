import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/post/schemas/post.schemas';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: PostDocument) {
    const createdPost = new this.postModel(data);

    return createdPost.save();
  }
}
