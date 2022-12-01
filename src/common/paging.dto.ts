import { IsNotEmpty, IsNumber } from 'class-validator';

export class PagingDto {
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}
