import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
@ObjectType()
export class Category {
	@Field(() => String)
	id: string;

	@Prop()
	@Field()
	name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
