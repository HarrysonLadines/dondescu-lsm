import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNegocioController } from './producto-negocio.controller.ts';

describe('ProductoNegocioController', () => {
  let controller: ProductoNegocioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoNegocioController],
    }).compile();

    controller = module.get<ProductoNegocioController>(ProductoNegocioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
