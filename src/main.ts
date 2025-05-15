import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { registerEnumType } from '@nestjs/graphql';
import { ProductStatus } from './schemas/product.schema';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: '*',
		credentials: true,
	});

	registerEnumType(ProductStatus, {
		name: 'ProductStatus',
	});

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
