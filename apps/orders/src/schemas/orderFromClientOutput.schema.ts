import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderFromClientOutputDocument = HydratedDocument<OrderFromClientOutput>;

@Schema()
@ObjectType()
export class OrderFromClientOutput {
	@Field()
	id: string;

	@Prop()
	@Field()
	amount: number;
}
