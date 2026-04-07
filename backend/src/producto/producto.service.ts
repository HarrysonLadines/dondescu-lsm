import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductoService {
  constructor(private prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {
    return await this.prisma.producto.create({
      data: createProductoDto,
    });
  }

  async findAll() {
    return await this.prisma.producto.findMany({
      include: {
        categoria: true,
      },
    });
  }

  async findOne(id_producto: number) {
    return await this.prisma.producto.findUnique({
      where: { id_producto },
      include: {
        categoria: true,
      },
    });
  }

  async update(id_producto: number, updateProductoDto: UpdateProductoDto) {
    return await this.prisma.producto.update({
      where: { id_producto },
      data: updateProductoDto,
    });
  }

  async remove(id_producto: number) {
    return await this.prisma.producto.delete({
      where: { id_producto },
    });
  }
}
