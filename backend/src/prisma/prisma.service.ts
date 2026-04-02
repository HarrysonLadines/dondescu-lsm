import {
    Injectable,
    OnModuleInit,
    OnModuleDestroy,
    Logger,
} from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const { Pool } = pg;

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService.name);

    constructor() {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL as string,
        });

        const adapter = new PrismaPg(pool);
        super({ adapter });
    }

    async onModuleInit() {
        this.logger.log('Conectando a Prisma DB...');
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
