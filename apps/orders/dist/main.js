"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const DEFAULT_PORT = 3020;
(0, dotenv_1.config)({ path: (0, path_1.join)(__dirname, '../../../.env') });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map