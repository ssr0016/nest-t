import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {
  @ApiProperty({
    description: 'The title of post',
    default: 'test title',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The description of post',
    default: 'test description',
  })
  @IsNotEmpty()
  description: string;
}
