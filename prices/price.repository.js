"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRerpository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const price_entity_1 = require("./entities/price.entity");
let PriceRerpository = class PriceRerpository extends typeorm_1.Repository {
    async createPrice(createPriceDto, price_region, department) {
        const { price, days } = createPriceDto;
        const newPrice = new price_entity_1.Price();
        newPrice.days = days;
        newPrice.price = price;
        newPrice.department = department;
        newPrice.price_region = price_region;
        return await this.save(newPrice);
    }
    async findAllPrices() {
        return await this.find({ loadEagerRelations: true, relations: ["department", "price_region"] });
    }
    async findPriceById(id) {
        const price = await this.findOne(id, { loadEagerRelations: true, relations: ["department", "price_region"] });
        if (!price) {
            throw new common_1.NotFoundException('Price not found');
        }
        return price;
    }
    async updatePrice(id, updatePriceDto) {
        const price = await this.findPriceById(id);
        const newPrice = Object.assign(price, updatePriceDto);
        return await this.save(newPrice);
    }
    async deletePrice(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Price not found');
        }
    }
    async findPriceByDaysAndDeparment(days, department) {
        const prices = await this.find({ where: { days, department }, loadEagerRelations: true, relations: ["department", "price_region"] });
        if (prices.length === 0) {
            throw new common_1.NotFoundException('Price not found');
        }
        return prices;
    }
};
PriceRerpository = __decorate([
    (0, typeorm_1.EntityRepository)(price_entity_1.Price),
    (0, common_1.Injectable)()
], PriceRerpository);
exports.PriceRerpository = PriceRerpository;
//# sourceMappingURL=price.repository.js.map