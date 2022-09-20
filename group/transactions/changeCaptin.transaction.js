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
exports.ChangeCaptinTransaction = void 0;
const common_1 = require("@nestjs/common");
const adjustment_entity_1 = require("../../adjustment/entities/adjustment.entity");
const typeorm_1 = require("typeorm");
const group_entity_1 = require("../entities/group.entity");
let ChangeCaptinTransaction = class ChangeCaptinTransaction {
    constructor(connection) {
        this.connection = connection;
    }
    async run(captin, group, changeCaptinDto) {
        return await this.connection.transaction(async (manager) => {
            const { amount, date } = changeCaptinDto;
            const oldCaptin = group.captin;
            const negativeAmount = amount * -1;
            const newCaptin = captin;
            group.captin = newCaptin;
            group.temp_captin_id = oldCaptin.id;
            await this.createAdjustment(oldCaptin, { amount: negativeAmount, date }, manager);
            await this.createAdjustment(captin, { amount, date }, manager);
            return await manager.getRepository(group_entity_1.Group).save(group);
        });
    }
    async createAdjustment(captin, createAdjustmentDto, manager) {
        const { amount, date } = createAdjustmentDto;
        const adjustment = new adjustment_entity_1.Adjustment();
        adjustment.date = date;
        adjustment.amount = amount;
        adjustment.captin = captin;
        await manager.getRepository(adjustment_entity_1.Adjustment).save(adjustment);
    }
};
ChangeCaptinTransaction = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], ChangeCaptinTransaction);
exports.ChangeCaptinTransaction = ChangeCaptinTransaction;
//# sourceMappingURL=changeCaptin.transaction.js.map