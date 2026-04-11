import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto.ts';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.ts';
import { PrismaService } from '../prisma/prisma.service.ts';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.prisma.categoria.create({
      data: createCategoriaDto,
    });
  }

  async findAll() {
    return await this.prisma.categoria.findMany({
    });
  }

  async findOne(id_categoria: number) {
    return await this.prisma.categoria.findUnique({
      where: { id_categoria },
    });
  }

  async update(id_categoria: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.prisma.categoria.update({
      where: { id_categoria },
      data: updateCategoriaDto,
    });
  }

  async remove(id_categoria: number) {
    return await this.prisma.categoria.delete({
      where: { id_categoria },
    });
  }
}
