import { PartialType } from '@nestjs/mapped-types';
import { CreateLogroDto } from './logro.dto.ts';

export class UpdateLogroDto extends PartialType(CreateLogroDto) {}
