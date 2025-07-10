import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductOrder, ProductOrderSchema } from 'src/schemas/product_order.schema';
import { ProductOrderService } from './product_order.service';
import { ProductOrderRepository } from './product_order.repository';
import { ProductOrderResolver } from './product_order.resolver';

@Module({
	imports: [MongooseModule.forFeature([{ name: ProductOrder.name, schema: ProductOrderSchema }])],
	providers: [ProductOrderService, ProductOrderRepository, ProductOrderResolver],
	exports: [ProductOrderService],
})
export class ProductOrderModule {}
