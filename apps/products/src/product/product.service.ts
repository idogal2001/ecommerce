import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from '../schemas/product.schema';
import { BoolMap } from '../utils/product.types';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
	constructor(
		private readonly productRepository: ProductRepository,
		private readonly categoryService: CategoryService,
	) {}

	async findAll(): Promise<Product[]> {
		const categories = await this.categoryService.findAll();
		const products = await this.productRepository.findAll();
		const productsWithCategoryNames = products.map(product => {
			const categoryNames = categories.filter(category => product.categories?.includes(category.id)).map(category => category.name);

			return {
				...product,
				categoryNames,
			};
		});

		return productsWithCategoryNames;
	}

	async findById(id: string): Promise<Product | null> {
		return this.productRepository.findById(id);
	}

	async isProductsExist(ids: string[]): Promise<BoolMap[]> {
		const products = await this.productRepository.findAll();
		const realProducts = ids.map(id => {
			if (products.find(product => product.id === id)) {
				return { id: true };
			} else {
				return { id: false };
			}
		});

		return realProducts;
	}

	async updatePrice(price: number, id: string): Promise<Product | null> {
		return this.productRepository.updatePrice(id, price);
	}
}
