import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "./product.service";
import { Product, StringToBool } from "./product.type";

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private productService: ProductService,
  ) {}

  @Query(() => [Product])
  async getProducts() {
    return this.productService.findAll();
  }

    @Query(() => Product)
  async getProductById(@Args('id', { type: () => String }) id: string) {
    return this.productService.findById(id);
  }

      @Query(() => [StringToBool])
  async getRealProducts(@Args('ids', { type: () => [String] }) ids: string[]) {
    return this.productService.findRealProducts(ids);
  }
@Mutation(() => Product)
async updatePrice(
  @Args('price', { type: () => Number }) price: number,
  @Args('id', { type: () => String }) id: string,
) {
  return this.productService.updatePrice(price, id);
}
}
