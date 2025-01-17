import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from 'src/common/models/base.model';

export class Post extends BaseModel {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content?: string | null;
  @ApiProperty()
  published: boolean;
  @ApiProperty()
  authorId?: string | null;
}
