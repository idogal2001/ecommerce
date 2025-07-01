"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphql_1 = require("@nestjs/graphql");
const product_schema_1 = require("./schemas/product.schema");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const DEFAULT_PORT = 3010;
(0, dotenv_1.config)({ path: (0, path_1.join)(__dirname, '../../../.env') });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    (0, graphql_1.registerEnumType)(product_schema_1.ProductStatus, {
        name: 'ProductStatus',
    });
    await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map