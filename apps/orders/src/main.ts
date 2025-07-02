import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { join } from 'path';

const DEFAULT_PORT = 3020;

config({ path: join(__dirname, '../../../.env') });

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
bootstrap();
