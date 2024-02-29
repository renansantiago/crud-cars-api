import { Injectable } from '@nestjs/common';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from '../schemas/car.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<CarDocument>,
  ) {}

  create(createCarInput: CreateCarInput) {
    return this.carModel.create(createCarInput);
  }

  findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    return this.carModel.findById(id);
  }

  update({ id, ...updateCarInput }: UpdateCarInput) {
    return this.carModel.findByIdAndUpdate(id, updateCarInput, {
      new: true,
    });
  }

  remove(id: string) {
    return this.carModel.findByIdAndDelete(id);
  }
}
