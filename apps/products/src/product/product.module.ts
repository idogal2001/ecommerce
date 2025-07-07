import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { ProductResolver } from './product.resolver';
import { CategoryModule } from 'src/category/category.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), CategoryModule],
	providers: [ProductService, ProductRepository, ProductResolver],
	exports: [ProductService],
})
export class ProductModule {}
