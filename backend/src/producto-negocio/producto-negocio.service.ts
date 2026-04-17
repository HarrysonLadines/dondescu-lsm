import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.ts';
import { CreateProductoNegocioDto } from './dto/create-productoNegocio.dto.ts';

@Injectable()
export class ProductoNegocioService {
    constructor(private prisma: PrismaService) { }

    async create(createProductoNegocioDto: CreateProductoNegocioDto) {
        return await this.prisma.productoNegocio.create(
            {
                data: {
                    id_negocio: createProductoNegocioDto.id_negocio,
                    id_producto: createProductoNegocioDto.id_producto
                }
            }
        )
    }

    async findAll() {
        return await this.prisma.productoNegocio.findMany()
    }

    async findOne(id_producto: number, id_negocio: number) {
        return await this.prisma.productoNegocio.findUnique({
            where: {
                id_producto_id_negocio: {
                    id_producto,
                    id_negocio
                }
            }
        })
    }

    async remove(id_producto: number, id_negocio: number) {
        return await this.prisma.productoNegocio.delete({
            where: {
                id_producto_id_negocio: {
                    id_producto,
                    id_negocio
                }
            }
        })
    }
}
