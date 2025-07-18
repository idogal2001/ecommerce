import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from '../schemas/category.schema';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
	constructor(private categoryService: CategoryService) {}

	@Query(() => [Category])
	async getCategories() {
		return this.categoryService.findAll();
	}
}
