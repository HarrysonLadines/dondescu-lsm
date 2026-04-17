import 'dotenv/config';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.enableCors();
  app.use(express.json());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
