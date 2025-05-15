
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  _id: string;

  @Field()
  name: string;
}
