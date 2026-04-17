import { Injectable } from '@nestjs/common';
import { CreateColaboracionDto } from './dto/create-colaboracion.dto.ts';
import { UpdateColaboracionDto } from './dto/update-colaboracion.dto.ts';
import { PrismaService } from '../prisma/prisma.service.ts';
import { ProductoNegocioService } from '../producto-negocio/producto-negocio.service.ts';

@Injectable()
export class ColaboracionService {
  constructor(private prisma: PrismaService) {}

  async create(createColaboracionDto: CreateColaboracionDto) {
    const productoNegocioService = new ProductoNegocioService(this.prisma)
    const producto_negocio = await productoNegocioService.findOne(createColaboracionDto.id_producto, createColaboracionDto.id_negocio)

    if (!producto_negocio) {
      await this.prisma.productoNegocio.create({
        data: {
          id_producto: createColaboracionDto.id_producto, 
          id_negocio: createColaboracionDto.id_negocio,
        },
      });
    } 

    return await this.prisma.colaboracion.create({
      data: createColaboracionDto, //al añadir una colaboracion que calcule el promedio de los precios y a su vez vea si la diferencia es abismal, de serlo asi que lance un warning
      // si no existe una relacion producto negocio antes de la colaboracion, deberia crearse en ese momento, si no se reescribe la relacion.
      
    });
  }

  async findAll() {
    return await this.prisma.colaboracion.findMany({
      include: {
        /*producto: true,
        negocio: true,
        usuario: true,*/
      }
    });
  }

  async findOne(id_colaboracion: number) {
    return await this.prisma.colaboracion.findUnique({
      where: { id_colaboracion },
      include: {
        /*producto: true,
        negocio: true,
        usuario: true,*/
      } 
    });
  }

  async updateState(id_colaboracion: number, updateColaboracionDto: UpdateColaboracionDto) {
    return await this.prisma.colaboracion.update({
      where: {id_colaboracion},
      data: updateColaboracionDto
    })
  }

  async update(id_colaboracion: number, updateColaboracionDto: UpdateColaboracionDto) {
    return await this.prisma.colaboracion.update({
      where: { id_colaboracion },
      data: updateColaboracionDto,
    });
  }

  async remove(id_colaboracion: number) {
    return await this.prisma.colaboracion.delete({
      where: { id_colaboracion },
    });
  }
}
