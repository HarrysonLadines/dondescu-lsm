import { Test, TestingModule } from '@nestjs/testing';
import { NegocioController } from './negocio.controller.ts';
import { NegocioService } from './negocio.service.ts';

describe('NegocioController', () => {
  let controller: NegocioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NegocioController],
      providers: [NegocioService],
    }).compile();

    controller = module.get<NegocioController>(NegocioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
