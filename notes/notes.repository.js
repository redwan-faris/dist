"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const note_entity_1 = require("./entities/note.entity");
let NoteRepository = class NoteRepository extends typeorm_1.Repository {
    async createNote(createNoteDto, admin, user) {
        const note = new note_entity_1.Note();
        note.note = createNoteDto.note;
        note.admin = "admin";
        note.user = user;
    }
    async findNoteById(id) {
        const note = await this.findOne(id);
        if (!note) {
            throw new common_1.NotFoundException('Note Not Found');
        }
        return note;
    }
    async findAllNotes() {
        return await this.find();
    }
    async findNotesByUser(user) {
        const notes = await this.find({ where: {
                user
            } });
        return notes;
    }
    async deleteNote(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Note Not Found');
        }
    }
    async updateNote(id, updateNoteDto) {
        const note = await this.findNoteById(id);
        const newNote = Object.assign(note, updateNoteDto);
        return await this.save(newNote);
    }
};
NoteRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(note_entity_1.Note)
], NoteRepository);
exports.NoteRepository = NoteRepository;
//# sourceMappingURL=notes.repository.js.map