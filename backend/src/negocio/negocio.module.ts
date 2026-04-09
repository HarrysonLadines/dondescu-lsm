import { Module } from '@nestjs/common';
import { NegocioService } from './negocio.service.ts';
import { NegocioController } from './negocio.controller.ts';

@Module({
  controllers: [NegocioController],
  providers: [NegocioService],
})
export class NegocioModule {}
