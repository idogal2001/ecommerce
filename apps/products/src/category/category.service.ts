import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from '../schemas/category.schema';

@Injectable()
export class CategoryService {
	constructor(private readonly categoryRepository: CategoryRepository) {}

	async findAll(): Promise<Category[]> {
		return this.categoryRepository.findAll();
	}

	async findByIds(ids: string[]): Promise<string[]> {
		return this.categoryRepository.findByIds(ids);
	}
}
