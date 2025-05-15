import { ObjectType, Field, ID, Float, registerEnumType } from '@nestjs/graphql';

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

registerEnumType(ProductStatus, {
  name: 'ProductStatus',
});

@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  upload_date: Date;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  seller_name: string;

  @Field()
  image_url: string;

  @Field(() => ID)
  categories: string;

  @Field(() => ProductStatus)
  status: ProductStatus;
}

@ObjectType()
export class StringToBool {
  @Field()
  id: string;

  @Field()
  isReal: boolean;
}