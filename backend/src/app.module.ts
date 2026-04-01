import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductoModule } from './producto/producto.module';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
