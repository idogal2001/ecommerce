import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { OrderResolver } from './order.resolver';

@Module({
	imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
	providers: [OrderService, OrderRepository, OrderResolver],
	exports: [OrderService],
})
export class OrderModule {}
