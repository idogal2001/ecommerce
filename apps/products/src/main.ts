import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { registerEnumType } from '@nestjs/graphql';
import { ProductStatus } from './schemas/product.schema';
import { config } from 'dotenv';
import { join } from 'path';

const DEFAULT_PORT = 3010;

config({ path: join(__dirname, '../../../.env') });

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: '*',
		credentials: true,
	});

	registerEnumType(ProductStatus, {
		name: 'ProductStatus',
	});

	await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
bootstrap();
