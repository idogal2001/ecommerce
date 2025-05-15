
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  upload_date: Date;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  seller_name: string;

  @Prop()
  image_url: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' }) 
  categories: Types.ObjectId;

  @Prop({ enum: ['ACTIVE', 'DISABLED'] })
  status: 'ACTIVE' | 'DISABLED';
}

export const ProductSchema = SchemaFactory.createForClass(Product);
