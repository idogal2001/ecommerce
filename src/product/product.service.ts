import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.schema";
import { StringToBool } from "./product.types";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: string): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async findRealProducts(ids: string[]): Promise<StringToBool[]> {
    const products = await this.productRepository.findAll();
    const realProducts = ids.map((id) => {
      if(products.find(product => product._id === id)) {
        return {id: true}
      }
      else {
        return {id: false}
      }
    })

    return realProducts;
  }

  async updatePrice(price: number, id: string): Promise<Product | null> {
    return this.productRepository.updatePrice(id, price); 
  }
}