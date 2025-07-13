import { Injectable } from '@nestjs/common';
import { ProductOrderRepository } from './product_order.repository';
import { ProductOrder } from '../schemas/product_order.schema';
import { OrderFromClient } from 'src/schemas/orderFromClient.schema';

@Injectable()
export class ProductOrderService {
	constructor(private readonly productOrderRepository: ProductOrderRepository) {}

	async findByOrderId(id: string): Promise<ProductOrder[] | unknown> {
		return this.productOrderRepository.findByOrderId(id);
	}

	async insertProductOrder(order_id: string, orderFromClient: OrderFromClient[]) {
		return this.productOrderRepository.insertProductOrder(order_id, orderFromClient);
	}
}
