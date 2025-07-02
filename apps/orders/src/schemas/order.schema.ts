import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
@ObjectType()
export class Order {
	@Field(() => String)
	id: string;

	@Prop()
	@Field()
	date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
