import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaController } from './categoria.controller.ts';
import { CategoriaService } from './categoria.service.ts';

describe('CategoriaController', () => {
  let controller: CategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaController],
      providers: [CategoriaService],
    }).compile();

    controller = module.get<CategoriaController>(CategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
