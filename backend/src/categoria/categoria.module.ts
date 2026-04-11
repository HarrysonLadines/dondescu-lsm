import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service.ts';
import { CategoriaController } from './categoria.controller.ts';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
