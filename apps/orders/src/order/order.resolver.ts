import { Args, Query, Resolver, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '../schemas/order.schema';
import { Product } from 'src/entities/product.reference';

@Resolver(() => Order)
export class OrderResolver {
	constructor(private orderService: OrderService) {}

	@Query(() => [Order])
	async getOrders() {
		return this.orderService.findAll();
	}

	@Query(() => Order)
	async getOrderById(@Args('id', { type: () => String }) id: string) {
		return this.orderService.findById(id);
	}

	@ResolveField(() => Product)
	product(@Parent() order: Order) {
		return { __typename: 'Product', id: order.id };
	}

	@ResolveReference()
	async resolveReference(reference: { __typename: string; id: string }) {
		return this.orderService.findById(reference.id);
	}
}
