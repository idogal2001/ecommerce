import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product, BoolMap } from '../schemas/product.schema';

@Resolver(() => Product)
export class ProductResolver {
	constructor(private productService: ProductService) {}

	@Query(() => [Product])
	async getProducts() {
		return this.productService.findAll();
	}

	@Query(() => Product)
	async getProductById(@Args('id', { type: () => String }) id: string) {
		return this.productService.findById(id);
	}

	@Query(() => [BoolMap])
	async isProductsExist(@Args('ids', { type: () => [String] }) ids: string[]) {
		return this.productService.isProductsExist(ids);
	}
	@Mutation(() => Product)
	async updatePrice(@Args('price', { type: () => Number }) price: number, @Args('id', { type: () => String }) id: string) {
		return this.productService.updatePrice(price, id);
	}
}
