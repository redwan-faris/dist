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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const notes_repository_1 = require("./notes.repository");
let NotesService = class NotesService {
    constructor(noteRepository, userService) {
        this.noteRepository = noteRepository;
        this.userService = userService;
    }
    async create(createNoteDto, adminId) {
        const user = await this.userService.findOne(createNoteDto.user_id);
        return this.noteRepository.createNote(createNoteDto, "admin", user);
    }
    findAll() {
        return this.noteRepository.findAllNotes();
    }
    findOne(id) {
        return this.noteRepository.findNoteById(id);
    }
    update(id, updateNoteDto) {
        return this.noteRepository.updateNote(id, updateNoteDto);
    }
    remove(id) {
        return this.noteRepository.deleteNote(id);
    }
    async getNotesByUser(id) {
        const user = await this.userService.findOne(id);
        return await this.noteRepository.findNotesByUser(user);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notes_repository_1.NoteRepository)),
    __metadata("design:paramtypes", [notes_repository_1.NoteRepository,
        user_service_1.UserService])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map