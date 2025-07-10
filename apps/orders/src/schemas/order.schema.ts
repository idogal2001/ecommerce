import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductOrder } from './product_order.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
@ObjectType()
export class Order {
	@Field(() => ID)
	id: string;

	@Prop()
	@Field()
	date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
