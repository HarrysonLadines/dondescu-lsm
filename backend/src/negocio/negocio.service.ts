import { Injectable } from '@nestjs/common';
import { CreateNegocioDto } from './dto/create-negocio.dto.ts';
import { UpdateNegocioDto } from './dto/update-negocio.dto.ts';
import { PrismaService } from '../prisma/prisma.service.ts';

@Injectable()
export class NegocioService {
  constructor(private prisma: PrismaService) {}

  async create(createNegocioDto: CreateNegocioDto) {
    return await this.prisma.negocio.create({
      data: createNegocioDto,
    });
  }

  async findAll() {
    return await this.prisma.negocio.findMany({
    });
  }

  async findOne(id_negocio: number) {
    return await this.prisma.negocio.findUnique({
      where: { id_negocio },
    });
  }

  async update(id_negocio: number, updateNegocioDto: UpdateNegocioDto) {
    return await this.prisma.negocio.update({
      where: { id_negocio },
      data: updateNegocioDto,
    });
  }

  async remove(id_negocio: number) {
    return await this.prisma.negocio.delete({
      where: { id_negocio },
    });
  }
}
