import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.ts';
import { UpdateLogroDto } from './dto/update-logro.dto.ts';
import { CreateLogroDto } from './dto/logro.dto.ts';

@Injectable()
export class LogroService {
  constructor(private prisma: PrismaService) {}

  async create(createLogroDto: CreateLogroDto){
    return await this.prisma.logro.create({
      data: createLogroDto, //al crear un logro deberia asignarse tambien la cantidad de puntos, y estos a su vez sumarlos al usuario
    });
  }

  async findAll() {
    return await this.prisma.logro.findMany({
      include: {
        usuario: true,
      }
    });
  }

  async findOne(id_logro: number) {
    return await this.prisma.logro.findUnique({
      where: { id_logro },
      include: {
        usuario: true,
      } 
    });
  }

  async update(id_logro: number, updateLogroDto: UpdateLogroDto) {
    return await this.prisma.logro.update({
      where: { id_logro },
      data: updateLogroDto,
    });
  }

  async remove(id_logro: number) {
    return await this.prisma.logro.delete({
      where: { id_logro },
    });
  }
}
