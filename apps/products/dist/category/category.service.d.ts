import { CategoryRepository } from './category.repository';
import { Category } from '../schemas/category.schema';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    findAll(): Promise<Category[]>;
}
