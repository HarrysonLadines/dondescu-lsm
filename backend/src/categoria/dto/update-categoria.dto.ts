import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto.ts';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {}
