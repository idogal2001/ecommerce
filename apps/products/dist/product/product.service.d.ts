import { ProductRepository } from './product.repository';
import { Product } from '../schemas/product.schema';
import { BoolMap } from '../utils/product.types';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    isProductsExist(ids: string[]): Promise<BoolMap[]>;
    updatePrice(price: number, id: string): Promise<Product | null>;
}
