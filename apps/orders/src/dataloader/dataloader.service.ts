import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { ProductOrder } from 'src/schemas/product_order.schema';
import { ProductOrderService } from 'src/product_order/product_order.service';

@Injectable()
export class DataloaderService {
	public readonly productOrdersByOrderId: DataLoader<string, ProductOrder[]>;

	constructor(private readonly productOrderService: ProductOrderService) {
		this.productOrdersByOrderId = new DataLoader(async (orderIds: readonly string[]) => {
			const allProductOrders = await this.productOrderService.findByOrderIds(orderIds as string[]);

			const map: Record<string, ProductOrder[]> = {};
			for (const id of orderIds) map[id] = [];
			for (const po of allProductOrders) {
				map[po.order_id]?.push(po);
			}
			return orderIds.map(id => map[id] || []);
		});
	}
}
