import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { ProductStatus } from '../schemas/product.schema';

@Injectable()
export class ProductRepository {
	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

	async findAll(): Promise<Product[]> {
		return this.productModel.find().exec();
	}

	async findById(id: string): Promise<Product | null> {
		return this.productModel.findById(id).exec();
	}

	async findByOrderId(id: string): Promise<Product | null> {
		return this.productModel.findOne({ order_id: id }).exec();
	}

	async updatePrice(id: string, price: number): Promise<Product | null> {
		return this.productModel.findByIdAndUpdate({ _id: id }, { $set: { price } }, { new: true }).exec();
	}

	async deleteProduct(id: string): Promise<Product | null> {
		return this.productModel.findByIdAndDelete(id).exec();
	}

	async updateStatus(id: string, status: ProductStatus): Promise<Product | null> {
		return this.productModel.findByIdAndUpdate({ _id: id }, { $set: { status } }, { new: true }).exec();
	}

	async findActivatedProducts(ids: string[]) {}
}
