import { Module } from '@nestjs/common';
import { GanadorService } from './ganador.service.ts';
import { GanadorController } from './ganador.controller.ts';

@Module({
  controllers: [GanadorController],
  providers: [GanadorService],
})
export class GanadorModule {}
