import { HydratedDocument, Types } from 'mongoose';
export type ProductDocument = HydratedDocument<Product>;
export declare enum ProductStatus {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED"
}
export declare class Product {
    id: string;
    name: string;
    upload_date: Date;
    description: string;
    price: number;
    seller_name: string;
    image_url: string;
    categories: Types.ObjectId;
    status: 'ACTIVE' | 'DISABLED';
}
export declare class BoolMap {
    id: string;
    isReal: boolean;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product, any> & Product & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}> & import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
