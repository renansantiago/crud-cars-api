import { CreateCarInput } from './create-car.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCarInput extends PartialType(CreateCarInput) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
