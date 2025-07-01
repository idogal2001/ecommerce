"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_service_1 = require("./product.service");
const product_schema_1 = require("../schemas/product.schema");
let ProductResolver = class ProductResolver {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts() {
        return this.productService.findAll();
    }
    async getProductById(id) {
        return this.productService.findById(id);
    }
    async isProductsExist(ids) {
        return this.productService.isProductsExist(ids);
    }
    async updatePrice(price, id) {
        return this.productService.updatePrice(price, id);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_schema_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_schema_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductById", null);
__decorate([
    (0, graphql_1.Query)(() => [product_schema_1.BoolMap]),
    __param(0, (0, graphql_1.Args)('ids', { type: () => [String] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "isProductsExist", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, graphql_1.Args)('price', { type: () => Number })),
    __param(1, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updatePrice", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_schema_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map