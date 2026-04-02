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
    return await this.prisma.producto.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.producto.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    return await this.prisma.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.producto.delete({
      where: { id },
    });
  }
}
