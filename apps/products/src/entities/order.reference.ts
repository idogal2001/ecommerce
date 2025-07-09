import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
@Directive('@extends')
export class Order {
	@Field(() => ID)
	id: string;
}
