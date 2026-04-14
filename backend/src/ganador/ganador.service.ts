import { Injectable } from '@nestjs/common';
import { UpdateGanadorDto } from './dto/update-ganador.dto.ts';
import { PrismaService } from '../prisma/prisma.service.ts';

@Injectable()
export class GanadorService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.ganador.findMany({
      include: {
        producto: true,
        negocio: true,
        usuario: true,
      }
    });
  }

  async findOne(id_ganador: number) {
    return await this.prisma.ganador.findUnique({
      where: { id_ganador },
      include: {
        producto: true,
        negocio: true,
        usuario: true,
      } 
    });
  }

  async update(id_ganador: number, updateGanadorDto: UpdateGanadorDto) {
    return await this.prisma.ganador.update({
      where: { id_ganador },
      data: updateGanadorDto,
    });
  }

  async remove(id_ganador: number) {
    return await this.prisma.ganador.delete({
      where: { id_ganador },
    });
  }
}
