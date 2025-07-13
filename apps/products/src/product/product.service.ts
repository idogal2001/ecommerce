import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product, ProductStatus } from '../schemas/product.schema';
import { BoolMap } from '../utils/product.types';

@Injectable()
export class ProductService {
	constructor(private readonly productRepository: ProductRepository) {}

	async findAll(): Promise<Product[]> {
		return this.productRepository.findAll();
	}

	async getProductIds(): Promise<string[]> {
		const productsIds = (await this.findAll()).map(product => product.id);
		return productsIds;
	}

	async findById(id: string): Promise<Product | null> {
		return this.productRepository.findById(id);
	}

	async findByOrderId(id: string): Promise<Product | null> {
		return this.productRepository.findByOrderId(id);
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

	async deleteProduct(id: string): Promise<Product | null> {
		return this.productRepository.deleteProduct(id);
	}

	async updateStatus(id: string, status: ProductStatus): Promise<Product | null> {
		return this.productRepository.updateStatus(id, status);
	}
}
