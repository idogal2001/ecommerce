import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./product.schema";


@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

async findAll(): Promise<Product[]> {
  const products = await this.productModel.find().exec();
  return products;
}

async findById(id : string): Promise<Product | null> {
  const product = await this.productModel.findById(id).exec();
  return product;
}

async updatePrice(id: string, price: number) {
  await this.productModel.updateOne({ _id: id }, { $set: { price } });
  return this.productModel.findById(id);
}
}