import { Module } from '@nestjs/common';
import { CommonUtilsService } from './common-utils.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [HttpModule, ConfigModule],
	providers: [CommonUtilsService],
	exports: [CommonUtilsService],
})
export class CommonUtilsModule {}
