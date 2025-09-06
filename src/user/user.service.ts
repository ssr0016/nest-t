import { Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';

@Injectable()
export class UserService {
  constructor(private readonly postService: PostService) {}
}
