import { PartialType } from '@nestjs/swagger';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';

export class UpdatePostPatchDTO extends PartialType(CreatePostDTO) {}
