import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	DISABLED = 'DISABLED',
}

@Schema()
@ObjectType()
export class Product {
	@Field(() => String)
	id: string;

	@Prop()
	@Field()
	name: string;

	@Prop()
	@Field()
	upload_date: Date;

	@Prop()
	@Field()
	description: string;

	@Prop()
	@Field()
	price: number;

	@Prop()
	@Field()
	seller_name: string;

	@Prop()
	@Field()
	image_url: string;

	@Prop({ type: Types.ObjectId, ref: 'Category' })
	@Field(() => ID)
	categories: Types.ObjectId;

	@Prop({ enum: ['ACTIVE', 'DISABLED'] })
	@Field(() => ProductStatus)
	status: 'ACTIVE' | 'DISABLED';
}

@ObjectType()
export class BoolMap {
	@Field()
	id: string;

	@Field()
	isReal: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
