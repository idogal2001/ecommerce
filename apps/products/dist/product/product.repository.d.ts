import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
export declare class ProductRepository {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    updatePrice(id: string, price: number): Promise<Product | null>;
    findActivatedProducts(ids: string[]): Promise<void>;
}
