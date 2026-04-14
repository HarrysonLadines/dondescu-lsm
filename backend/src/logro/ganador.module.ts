import { Module } from '@nestjs/common';
import { LogroService } from './logro.service.ts';
import { LogroController } from './logro.controller.ts';

@Module({
  controllers: [LogroController],
  providers: [LogroService],
})
export class LogroModule {}
