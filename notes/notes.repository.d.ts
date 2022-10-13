import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
export declare class NoteRepository extends Repository<Note> {
    createNote(createNoteDto: CreateNoteDto, admin: string, user: User): Promise<void>;
    findNoteById(id: number): Promise<Note>;
    findAllNotes(): Promise<Note[]>;
    findNotesByUser(user: User): Promise<Note[]>;
    deleteNote(id: number): Promise<void>;
    updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<Note>;
}
