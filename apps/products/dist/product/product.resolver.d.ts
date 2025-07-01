import { ProductService } from './product.service';
import { Product } from '../schemas/product.schema';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    isProductsExist(ids: string[]): Promise<import("../utils/product.types").BoolMap[]>;
    updatePrice(price: number, id: string): Promise<Product | null>;
}
