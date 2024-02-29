import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
