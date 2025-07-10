import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductOrder, ProductOrderDocument } from '../schemas/product_order.schema';

@Injectable()
export class ProductOrderRepository {
	constructor(@InjectModel(ProductOrder.name) private productOrderModel: Model<ProductOrderDocument>) {}

	async findByOrderId(id: string): Promise<ProductOrder[] | unknown> {
		const result = await this.productOrderModel.find({ order_id: id }).exec();
		console.log('Matching products:', result);
		return result;
	}
}
