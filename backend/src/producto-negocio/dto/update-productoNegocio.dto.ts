import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoNegocioDto } from './create-productoNegocio.dto.ts';

export class UpdateProductoNegocioDto extends PartialType(CreateProductoNegocioDto) {}
