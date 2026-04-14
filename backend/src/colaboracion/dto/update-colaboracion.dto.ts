import { PartialType } from '@nestjs/mapped-types';
import { CreateColaboracionDto } from './create-colaboracion.dto.ts';

export class UpdateColaboracionDto extends PartialType(CreateColaboracionDto) {}
