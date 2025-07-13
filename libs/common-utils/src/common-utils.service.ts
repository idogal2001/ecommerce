import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { onlyIdsFromOrderQuery } from '../queries/onlyIdsFromOrderQuery';

@Injectable()
export class CommonUtilsService {
	constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService,
	) {}
	async getProductById(onlyIdsFromOrder: string[]): Promise<boolean> {
		const { data } = await firstValueFrom(
			this.httpService.post(this.configService.get<string>('PRODUCTS_URL') ?? '', {
				query: onlyIdsFromOrderQuery,
				variables: { ids: onlyIdsFromOrder },
			}),
		);

		const existsArray = data.data.isProductsExist;

		const allExist = existsArray.every(item => item.id !== 'false');

		return allExist;
	}
}
