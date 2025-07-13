import { Field, ObjectType, Directive, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductOrderDocument = HydratedDocument<ProductOrder>;

@Schema({ versionKey: false })
@ObjectType()
export class ProductOrder {
	@Field(() => ID)
	id: string;

	@Prop()
	@Field()
	product_id: string;

	@Prop()
	@Field()
	order_id: string;

	@Prop()
	@Field()
	amount: number;
}

export const ProductOrderSchema = SchemaFactory.createForClass(ProductOrder);
