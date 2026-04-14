import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateGanadorDto } from './dto/update-ganador.dto.ts';
import { GanadorService } from './ganador.service.ts';

@Controller('Ganador')
export class GanadorController {
  constructor(private readonly ganadorService: GanadorService) { }

  @Get()
  findAll() {
    return this.ganadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ganadorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGanadorDto: UpdateGanadorDto,
  ) {
    return this.ganadorService.update(+id, updateGanadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ganadorService.remove(+id);
  }
}
