import { Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderFromClientDocument = HydratedDocument<OrderFromClient>;

@Schema()
@InputType()
export class OrderFromClient {
	@Field()
	id: string;

	@Field()
	amount: number;
}
