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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.BoolMap = exports.Product = exports.ProductStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["ACTIVE"] = "ACTIVE";
    ProductStatus["DISABLED"] = "DISABLED";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
let Product = class Product {
    id;
    name;
    upload_date;
    description;
    price;
    seller_name;
    image_url;
    categories;
    status;
};
exports.Product = Product;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Product.prototype, "upload_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "seller_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "image_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Category' }),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['ACTIVE', 'DISABLED'] }),
    (0, graphql_1.Field)(() => ProductStatus),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Product);
let BoolMap = class BoolMap {
    id;
    isReal;
};
exports.BoolMap = BoolMap;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BoolMap.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], BoolMap.prototype, "isReal", void 0);
exports.BoolMap = BoolMap = __decorate([
    (0, graphql_1.ObjectType)()
], BoolMap);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map