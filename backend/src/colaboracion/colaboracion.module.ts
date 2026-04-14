import { Module } from '@nestjs/common';
import { ColaboracionService } from './colaboracion.service.ts';
import { ColaboracionController } from './colaboracion.controller.ts';

@Module({
  controllers: [ColaboracionController],
  providers: [ColaboracionService],
})
export class ColaboracionModule {}
