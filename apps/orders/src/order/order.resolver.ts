import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '../schemas/order.schema';
import { ProductOrder } from 'src/schemas/product_order.schema';
import { ProductOrderService } from 'src/product_order/product_order.service';
import { OrderFromClient } from 'src/schemas/orderFromClient.schema';
import { OrderFromClientOutput } from 'src/schemas/orderFromClientOutput.schema';
import { DataloaderService } from 'src/dataloader/dataloader.service';

@Resolver(() => Order)
export class OrderResolver {
	constructor(
		private orderService: OrderService,
		private productOrderService: ProductOrderService,
		private readonly dataloaderService: DataloaderService,
	) {}

	@Query(() => [Order])
	async getOrders() {
		return this.orderService.findAll();
	}

	@ResolveField(() => [ProductOrder])
	async productsOrder(@Parent() order: Order) {
		// return this.productOrderService.findByOrderId(order.id);
		return this.dataloaderService.productOrdersByOrderId.load(order.id);
	}

	@Query(() => [Order])
	async getOrdersByIds(@Args('ids', { type: () => [String] }) ids: string[]) {
		return this.orderService.findByIds(ids);
	}

	@Query(() => Order)
	async getOrderById(@Args('id', { type: () => String }) id: string) {
		return this.orderService.findById(id);
	}

	@Mutation(() => OrderFromClientOutput)
	async insertOrder(@Args('orderFromClient', { type: () => [OrderFromClient] }) OrderFromClient: OrderFromClient[]) {
		return this.orderService.insertOrder(OrderFromClient);
	}
}
