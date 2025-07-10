import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product, BoolMap, ProductStatus } from '../schemas/product.schema';
import { CategoryService } from 'src/category/category.service';

@Resolver(() => Product)
export class ProductResolver {
	constructor(
		private productService: ProductService,
		private categoryService: CategoryService,
	) {}

	@ResolveField(() => [String])
	async categories(@Parent() product: Product) {
		return this.categoryService.findByIds(product.categories);
	}

	@ResolveReference()
	async resolveReference(reference: { __typename: string; id: string }) {
		return this.productService.findById(reference.id);
	}

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
	@Mutation(() => Product)
	async deleteProduct(@Args('id', { type: () => String }) id: string) {
		return this.productService.deleteProduct(id);
	}
	@Mutation(() => Product)
	async updateStatus(@Args('status', { type: () => ProductStatus }) status: ProductStatus, @Args('id', { type: () => String }) id: string) {
		return this.productService.updateStatus(id, status);
	}
}
