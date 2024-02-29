import { Test, TestingModule } from '@nestjs/testing';
import { CarsResolver } from './cars.resolver';
import { getModelToken } from '@nestjs/mongoose';
import { Car } from '../schemas/car.schema';
import { CarsService } from './cars.service';

describe('CarsResolver', () => {
  let resolver: CarsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsResolver,
        CarsService,
        { provide: getModelToken(Car.name), useValue: jest.fn() },
      ],
    }).compile();

    resolver = module.get<CarsResolver>(CarsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
