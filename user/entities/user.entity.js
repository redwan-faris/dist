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
exports.User = void 0;
const user_role_entity_1 = require("../../user_role/entities/user_role.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const student_entity_1 = require("../../student/entities/student.entity");
const captin_entity_1 = require("../../captin/entities/captin.entity");
const notification_entity_1 = require("../../notifications/entities/notification.entity");
const token_entity_1 = require("../../token/entities/token.entity");
const messenger_entity_1 = require("../../messenger/entities/messenger.entity");
const note_entity_1 = require("../../notes/entities/note.entity");
let User = class User {
    isValidPassword(textPassword, hashedPassword) {
        return bcrypt.compareSync(textPassword, hashedPassword);
    }
    hashUserPassword() {
        this.password = bcrypt.hashSync(this.password, 12);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, nullable: false, type: 'varchar' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "backup_phone_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_role_entity_1.UserRole, (user_role) => user_role.user),
    (0, class_transformer_1.Transform)(({ value }) => value.role),
    __metadata("design:type", user_role_entity_1.UserRole)
], User.prototype, "user_role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => student_entity_1.Student, student => student.user, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", student_entity_1.Student)
], User.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => captin_entity_1.Captin, captin => captin.user, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", captin_entity_1.Captin)
], User.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => notification_entity_1.Notification, notification => notification.users),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => token_entity_1.Token, token => token.user),
    (0, class_transformer_1.Transform)(({ value }) => value.token),
    __metadata("design:type", Array)
], User.prototype, "tokens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => messenger_entity_1.Messenger, messeges => messeges.user),
    __metadata("design:type", Array)
], User.prototype, "messeges", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => note_entity_1.Note, (note) => note.user),
    __metadata("design:type", Array)
], User.prototype, "notes", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map