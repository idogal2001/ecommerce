import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from '../schemas/product.schema';
import { BoolMap } from '../utils/product.types';

@Injectable()
export class ProductService {
	constructor(private readonly productRepository: ProductRepository) {}

	async findAll(): Promise<Product[]> {
		return this.productRepository.findAll();
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
