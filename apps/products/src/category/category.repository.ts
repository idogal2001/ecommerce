import { Injectable } from '@nestjs/common';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryRepository {
	constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

	async findAll(): Promise<Category[]> {
		return this.categoryModel.find().exec();
	}

	async findByIds(ids: string[]): Promise<string[]> {
		return this.categoryModel
			.find({ _id: { $in: ids } })
			.exec()
			.then(categories => categories.map(category => category.name));
	}
}
