import { IsNotEmpty, IsString } from 'class-validator';

export class PostInput {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
