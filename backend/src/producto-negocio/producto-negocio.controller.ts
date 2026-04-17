import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateProductoNegocioDto } from './dto/update-productoNegocio.dto.ts';
import { ProductoNegocioService } from './producto-negocio.service.ts';
import { CreateProductoNegocioDto } from './dto/create-productoNegocio.dto.ts';

@Controller('producto-negocio')
export class ProductoNegocioController {
    constructor(private readonly productoNegocioService: ProductoNegocioService) { }

    @Get()
    findAll() {
        return this.productoNegocioService.findAll();
    }

    @Post()
    create(@Body() createProductoNegocioDto: CreateProductoNegocioDto) {
        return this.productoNegocioService.create(createProductoNegocioDto);
    }


    @Get(':id')
    findOne(@Body() UpdateProductoNegocioDto) {
        return this.productoNegocioService.findOne(UpdateProductoNegocioDto.id_producto, UpdateProductoNegocioDto.id_negocio);
    }

    @Delete(':id')
    remove(@Body() UpdateProductoNegocioDto) {
        return this.productoNegocioService.remove(UpdateProductoNegocioDto.id_producto, UpdateProductoNegocioDto.id_negocio);
    }

}
