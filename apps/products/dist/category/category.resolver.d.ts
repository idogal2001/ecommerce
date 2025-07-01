import { Category } from '../schemas/category.schema';
import { CategoryService } from './category.service';
export declare class CategoryResolver {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
}
