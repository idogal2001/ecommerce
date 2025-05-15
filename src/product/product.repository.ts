import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductRepository {
	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

	async findAll(): Promise<Product[]> {
		return this.productModel.find().exec();
	}

	async findById(id: string): Promise<Product | null> {
		return this.productModel.findById(id).exec();
	}

	async updatePrice(id: string, price: number) {
		await this.productModel.updateOne({ _id: id }, { $set: { price } });
		return this.productModel.findById(id);
	}

	async findActivatedProducts(ids: string[]) {}
}
