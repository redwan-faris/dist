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
exports.AdjustmentController = void 0;
const common_1 = require("@nestjs/common");
const adjustment_service_1 = require("./adjustment.service");
const create_adjustment_dto_1 = require("./dto/create-adjustment.dto");
const update_adjustment_dto_1 = require("./dto/update-adjustment.dto");
let AdjustmentController = class AdjustmentController {
    constructor(adjustmentService) {
        this.adjustmentService = adjustmentService;
    }
    create(createAdjustmentDto) {
        return this.adjustmentService.create(createAdjustmentDto);
    }
    findAll() {
        return this.adjustmentService.findAll();
    }
    findOne(id) {
        return this.adjustmentService.findOne(+id);
    }
    update(id, updateAdjustmentDto) {
        return this.adjustmentService.update(+id, updateAdjustmentDto);
    }
    remove(id) {
        return this.adjustmentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adjustment_dto_1.CreateAdjustmentDto]),
    __metadata("design:returntype", void 0)
], AdjustmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdjustmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdjustmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_adjustment_dto_1.UpdateAdjustmentDto]),
    __metadata("design:returntype", void 0)
], AdjustmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdjustmentController.prototype, "remove", null);
AdjustmentController = __decorate([
    (0, common_1.Controller)('adjustment'),
    __metadata("design:paramtypes", [adjustment_service_1.AdjustmentService])
], AdjustmentController);
exports.AdjustmentController = AdjustmentController;
//# sourceMappingURL=adjustment.controller.js.map