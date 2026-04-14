import { PartialType } from '@nestjs/mapped-types';
import { GanadorDto } from './ganador.dto.ts';

export class UpdateGanadorDto extends PartialType(GanadorDto) {}
