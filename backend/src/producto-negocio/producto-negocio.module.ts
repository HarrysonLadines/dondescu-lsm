import { Module } from '@nestjs/common';
import { ProductoNegocioService } from './producto-negocio.service.ts';
import { ProductoNegocioController } from './producto-negocio.controller.ts';

@Module({
  providers: [ProductoNegocioService],
  controllers: [ProductoNegocioController]
})
export class ProductoNegocioModule {}
