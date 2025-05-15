import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "./category.repository";
import { Category } from "./category.schema";


@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }
}