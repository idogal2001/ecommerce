import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductOrder, ProductOrderDocument } from '../schemas/product_order.schema';
import { OrderFromClient } from 'src/schemas/orderFromClient.schema';

@Injectable()
export class ProductOrderRepository {
	constructor(@InjectModel(ProductOrder.name) private productOrderModel: Model<ProductOrderDocument>) {}

	async findByOrderId(id: string): Promise<ProductOrder[] | unknown> {
		const result = await this.productOrderModel.find({ order_id: id }).exec();
		return result;
	}

	async insertProductOrder(order_id: string, orderFromClient: OrderFromClient[]) {
		const documents = orderFromClient.map(item => ({
			product_id: item.id,
			amount: item.amount,
			order_id,
		}));

		return this.productOrderModel.insertMany(documents);
	}
}
