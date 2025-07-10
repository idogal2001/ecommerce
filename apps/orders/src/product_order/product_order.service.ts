import { Injectable } from '@nestjs/common';
import { ProductOrderRepository } from './product_order.repository';
import { ProductOrder } from '../schemas/product_order.schema';

@Injectable()
export class ProductOrderService {
	constructor(private readonly productOrderRepository: ProductOrderRepository) {}

	async findByOrderId(id: string): Promise<ProductOrder[] | unknown> {
		return this.productOrderRepository.findByOrderId(id);
	}
}
