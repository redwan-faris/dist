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
exports.GroupDays = void 0;
const typeorm_1 = require("typeorm");
let GroupDays = class GroupDays {
};
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], GroupDays.prototype, "captinId", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], GroupDays.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], GroupDays.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], GroupDays.prototype, "day", void 0);
GroupDays = __decorate([
    (0, typeorm_1.ViewEntity)({
        expression: `
    select scg.id as id , s.studentId as studentId, scg.captinId as captindId,scg.day  from student_captin_group as scg
    inner join student_group on student_group.id = scg.studentGroupId 
    inner join student_student_group_student_group as s on student_group.id =s.studentGroupId;

`
    })
], GroupDays);
exports.GroupDays = GroupDays;
//# sourceMappingURL=group-days.view.js.map