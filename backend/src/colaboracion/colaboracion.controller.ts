import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateColaboracionDto } from './dto/create-colaboracion.dto.ts';
import { ColaboracionService } from './colaboracion.service.ts';
import { UpdateColaboracionDto } from './dto/update-colaboracion.dto.ts';

@Controller('colaboracion')
export class ColaboracionController {
  constructor(private readonly colaboracionService: ColaboracionService) { }

  @Post()
  create(@Body() createColaboracionDto: CreateColaboracionDto) {
    return this.colaboracionService.create(createColaboracionDto);
  }

  @Patch(':id/state')
  updateState(
    @Param(':id') id:string,
    @Body() updateColaboracionDto: UpdateColaboracionDto) {
    return this.colaboracionService.updateState(+id, updateColaboracionDto);
  }

  @Get()
  findAll() {
    return this.colaboracionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboracionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColaboracionDto: UpdateColaboracionDto,
  ) {
    return this.colaboracionService.update(+id, updateColaboracionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboracionService.remove(+id);
  }
}
