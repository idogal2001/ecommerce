import { Args, Query, Resolver, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '../schemas/order.schema';
import { ProductOrder } from 'src/schemas/product_order.schema';
import { ProductOrderService } from 'src/product_order/product_order.service';

@Resolver(() => Order)
export class OrderResolver {
	constructor(
		private orderService: OrderService,
		private productOrderService: ProductOrderService,
	) {}

	@Query(() => [Order])
	async getOrders() {
		return this.orderService.findAll();
	}

	@Query(() => Order)
	async getOrderById(@Args('id', { type: () => String }) id: string) {
		return this.orderService.findById(id);
	}

	@ResolveField(() => [ProductOrder])
	async productsOrder(@Parent() order: Order) {
		return this.productOrderService.findByOrderId(order.id);
	}
}

// @ResolveField(() => Product)
// product(@Parent() order: Order) {
// 	return { __typename: 'Product', id: order.id };
// }

// @ResolveReference()
// async resolveReference(reference: { __typename: string; id: string }) {
// 	return this.orderService.findById(reference.id);
// }
