import { Field, ObjectType, Directive, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	DISABLED = 'DISABLED',
}

@Schema()
@ObjectType()
@Directive('@key(fields: "order_id")')
export class Product {
	@Field(() => ID)
	id: string;

	@Prop()
	@Field()
	order_id: string;

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

	@Prop()
	@Field(() => [String])
	categories: string[];

	@Prop({ enum: ['ACTIVE', 'DISABLED'] })
	@Field(() => ProductStatus)
	status: 'ACTIVE' | 'DISABLED';

	@Prop()
	@Field()
	amount: number;
}

@ObjectType()
export class BoolMap {
	@Field()
	id: string;

	@Field()
	isReal: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
