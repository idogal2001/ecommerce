import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
			driver: ApolloGatewayDriver,
			useFactory: async (configService: ConfigService) => ({
				gateway: {
					supergraphSdl: new IntrospectAndCompose({
						subgraphs: [
							{ name: 'product', url: configService.get<string>('PRODUCTS_URL') },
							{ name: 'orders', url: configService.get<string>('ORDERS_URL') },
						],
					}),
				},
			}),
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
