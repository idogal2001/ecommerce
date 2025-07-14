import { forwardRef, Module } from '@nestjs/common';
import { OrderModule } from 'src/order/order.module';
import { ProductOrderModule } from 'src/product_order/product_order.module';
import { DataloaderService } from './dataloader.service';

@Module({
	imports: [forwardRef(() => OrderModule), ProductOrderModule],
	providers: [DataloaderService],
	exports: [DataloaderService],
})
export class DataLoaderModule {}
