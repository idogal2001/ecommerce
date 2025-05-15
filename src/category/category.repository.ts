import { Injectable } from "@nestjs/common";
import { Category, CategoryDocument } from "./category.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CategoryRepository {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async findAll(): Promise<Category[]> {
      const categories = await this.categoryModel.find().exec();
  return categories;
  }
}