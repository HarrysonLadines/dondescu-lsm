import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LogroService } from './logro.service.ts';
import { UpdateLogroDto } from './dto/update-logro.dto.ts';
import { CreateLogroDto } from './dto/logro.dto.ts';

@Controller('Logro')
export class LogroController {
  constructor(private readonly logroService: LogroService) { }

  @Post()
  create(@Body() createLogroDto: CreateLogroDto) {
    return this.logroService.create(createLogroDto);
  }

  @Get()
  findAll() {
    return this.logroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logroService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatelogroDto: UpdateLogroDto,
  ) {
    return this.logroService.update(+id, updatelogroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logroService.remove(+id);
  }
}
