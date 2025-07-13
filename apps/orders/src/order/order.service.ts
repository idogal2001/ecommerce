import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from '../schemas/order.schema';
import { OrderFromClient } from 'src/schemas/orderFromClient.schema';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ProductOrderService } from 'src/product_order/product_order.service';

@Injectable()
export class OrderService {
	constructor(
		private readonly orderRepository: OrderRepository,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService,
		private readonly productOrderService: ProductOrderService,
		private readonly commonUtilsService: CommonUtilsService,
	) {}

	async findAll(): Promise<Order[]> {
		return this.orderRepository.findAll();
	}

	async findById(id: string): Promise<Order | null> {
		return this.orderRepository.findById(id);
	}

	async insertOrder(orderFromClient: OrderFromClient[]) {
		const onlyIdsFromOrder = orderFromClient.map(order => order.id);
		const products = await this.getProductById(onlyIdsFromOrder);
		if (!products) {
			throw new Error('No valid products found');
		}
		const inserted = await this.orderRepository.insertOrder({ date: new Date() });
		this.productOrderService.insertProductOrder(inserted.id, orderFromClient);
	}
}
