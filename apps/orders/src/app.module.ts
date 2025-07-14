import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { OrderModule } from './order/order.module';
import { ProductOrderModule } from './product_order/product_order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { DataLoaderModule } from './dataloader/dataloader.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRootAsync({
			useFactory: async (configService: ConfigService) => ({
				uri: configService.get<string>('MONGO_CONNECTION_STRING'),
			}),
			inject: [ConfigService],
		}),
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: {
				federation: 2,
			},
			csrfPrevention: false,
		}),
		OrderModule,
		ProductOrderModule,
		DataLoaderModule,
	],
})
export class AppModule {}
