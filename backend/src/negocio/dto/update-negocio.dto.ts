import { PartialType } from '@nestjs/mapped-types';
import { CreateNegocioDto } from './create-negocio.dto.ts';

export class UpdateNegocioDto extends PartialType(CreateNegocioDto) {}
