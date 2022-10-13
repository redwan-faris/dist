import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { User } from 'src/user/entities/user.entity';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: CreateNoteDto, user: User): Promise<void>;
    getNotesByUser(id: string): Promise<import("./entities/note.entity").Note[]>;
    findAll(): Promise<import("./entities/note.entity").Note[]>;
    findOne(id: string): Promise<import("./entities/note.entity").Note>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<import("./entities/note.entity").Note>;
    remove(id: string): Promise<void>;
}
