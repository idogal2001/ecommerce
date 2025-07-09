import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from '../schemas/order.schema';

@Injectable()
export class OrderService {
	constructor(private readonly orderRepository: OrderRepository) {}

	async findAll(): Promise<Order[]> {
		return this.orderRepository.findAll();
	}

	async findById(id: string): Promise<Order | null> {
		return this.orderRepository.findById(id);
	}
}
