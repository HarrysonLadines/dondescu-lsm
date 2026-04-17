import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductoModule } from './producto/producto.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { ProductoNegocioModule } from './producto-negocio/producto-negocio.module.ts';
import { CategoriaModule } from './categoria/categoria.module.ts';
import { NegocioModule } from './negocio/negocio.module.ts';
import { LogroModule } from './logro/ganador.module.ts';
import { GanadorModule } from './ganador/ganador.module.ts';
import { ColaboracionModule } from './colaboracion/colaboracion.module.ts';

@Module({
  imports: [ProductoModule, PrismaModule, /*AuthModule,*/ ProductoNegocioModule, CategoriaModule,
    NegocioModule, LogroModule, GanadorModule, ProductoNegocioModule, ColaboracionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
