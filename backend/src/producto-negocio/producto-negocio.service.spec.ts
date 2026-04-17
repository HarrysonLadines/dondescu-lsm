import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNegocioService } from './producto-negocio.service.ts';

describe('ProductoNegocioService', () => {
  let service: ProductoNegocioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNegocioService],
    }).compile();

    service = module.get<ProductoNegocioService>(ProductoNegocioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
