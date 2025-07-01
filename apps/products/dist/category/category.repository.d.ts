import { Category, CategoryDocument } from '../schemas/category.schema';
import { Model } from 'mongoose';
export declare class CategoryRepository {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    findAll(): Promise<Category[]>;
}
