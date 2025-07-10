import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { OrderResolver } from './order.resolver';
import { ProductOrderModule } from 'src/product_order/product_order.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]), ProductOrderModule],
	providers: [OrderService, OrderRepository, OrderResolver],
	exports: [OrderService],
})
export class OrderModule {}
