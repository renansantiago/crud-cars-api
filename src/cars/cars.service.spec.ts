import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car, CarDocument } from '../schemas/car.schema';
import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;
  let mockCarModel: any;

  beforeEach(async () => {
    mockCarModel = {
      create: jest.fn(),
      find: jest.fn(),
      findById: jest.fn(),
      findByIdAndUpdate: jest.fn(),
      findByIdAndDelete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsService,
        {
          provide: getModelToken(Car.name),
          useValue: mockCarModel,
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new car', async () => {
      const createCarInput: CreateCarInput = {
        name: 'Car 1',
        model: 'Model X',
        value: 10.99,
      };

      const car: CarDocument = {
        id: '1',
        name: 'Car 1',
        model: 'Model X',
        value: 10.99,
      } as CarDocument;

      jest.spyOn(mockCarModel, 'create').mockResolvedValue(car);

      const newCar = await service.create(createCarInput);

      expect(mockCarModel.create).toHaveBeenCalled();
      expect(mockCarModel.create).toHaveBeenCalledWith(createCarInput);

      expect(newCar).toEqual(car);
    });
  });

  describe('findAll', () => {
    it('should return all cars', async () => {
      const cars: CarDocument[] = [
        {
          id: '1',
          name: 'Car 1',
          model: 'Model Y',
          value: 10.99,
        },
        {
          id: '2',
          name: 'Car 2',
          model: 'Model Y',
          value: 20.99,
        },
      ] as CarDocument[];

      jest.spyOn(mockCarModel, 'find').mockResolvedValue(cars);

      const result = await service.findAll();

      expect(mockCarModel.find).toHaveBeenCalled();

      expect(result).toEqual(cars);
    });
  });

  describe('findOne', () => {
    it('should return a car by id', async () => {
      const car: CarDocument = {
        id: '1',
        name: 'Car 1',
        model: 'Model Z',
        value: 10.99,
      } as CarDocument;

      jest.spyOn(mockCarModel, 'findById').mockResolvedValue(car);

      const result = await service.findOne('1');

      expect(mockCarModel.findById).toHaveBeenCalledWith('1');

      expect(result).toEqual(car);
    });
  });

  describe('update', () => {
    it('should update a car by id', async () => {
      const updateCarInput: UpdateCarInput = {
        id: '1',
        name: 'Updated Car',
        model: 'Model X',
        value: 99.99,
      };

      const updatedCar: CarDocument = {
        name: 'Updated Car',
        model: 'Model X',
        value: 99.99,
      } as CarDocument;

      jest
        .spyOn(mockCarModel, 'findByIdAndUpdate')
        .mockResolvedValue(updatedCar);

      const result = await service.update(updateCarInput);

      expect(mockCarModel.findByIdAndUpdate).toHaveBeenCalledWith(
        '1',
        updatedCar,
        { new: true },
      );

      expect(result).toEqual(updatedCar);
    });
  });

  describe('remove', () => {
    it('should remove a car by id', async () => {
      const carId = '1';

      jest.spyOn(mockCarModel, 'findByIdAndDelete').mockResolvedValue(null);

      await service.remove(carId);

      expect(mockCarModel.findByIdAndDelete).toHaveBeenCalledWith(carId);
    });
  });
});
