import { Args, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { ProductOrderService } from './product_order.service';
import { ProductOrder } from '../schemas/product_order.schema';
import { Product } from 'src/entities/product.reference';

@Resolver(() => ProductOrder)
export class ProductOrderResolver {
	constructor(private productOrderService: ProductOrderService) {}

	@Query(() => ProductOrder)
	async getProductOrderByOrderId(@Args('id', { type: () => String }) id: string) {
		return this.productOrderService.findByOrderId(id);
	}

	@ResolveField(() => Product)
	product(@Parent() productOrder: ProductOrder) {
		return { __typename: 'Product', id: productOrder.product_id };
	}
}
