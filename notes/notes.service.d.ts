import { UserService } from 'src/user/user.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteRepository } from './notes.repository';
export declare class NotesService {
    private readonly noteRepository;
    private readonly userService;
    constructor(noteRepository: NoteRepository, userService: UserService);
    create(createNoteDto: CreateNoteDto, adminId: number): Promise<void>;
    findAll(): Promise<import("./entities/note.entity").Note[]>;
    findOne(id: number): Promise<import("./entities/note.entity").Note>;
    update(id: number, updateNoteDto: UpdateNoteDto): Promise<import("./entities/note.entity").Note>;
    remove(id: number): Promise<void>;
    getNotesByUser(id: number): Promise<import("./entities/note.entity").Note[]>;
}
