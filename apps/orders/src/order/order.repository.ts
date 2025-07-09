import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';

@Injectable()
export class OrderRepository {
	constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

	async findAll(): Promise<Order[]> {
		return this.orderModel.find().exec();
	}

	async findById(id: string): Promise<Order | null> {
		return this.orderModel.findById(id).exec();
	}

	async findByProduct(id: string, price: number): Promise<Order | null> {
		return this.orderModel.findByIdAndUpdate({ _id: id }, { $set: { price } }, { new: true }).exec();
	}
}
