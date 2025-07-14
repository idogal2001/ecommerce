import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderFromClientOutputDocument = HydratedDocument<OrderFromClientOutput>;

@Schema()
@ObjectType()
export class OrderFromClientOutput {
	@Field(() => ID)
	id: string;

	@Field()
	date: Date;
}
