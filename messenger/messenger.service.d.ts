import { UserService } from 'src/user/user.service';
import { CreateMessengerDto } from './dto/create-messenger.dto';
import { UpdateMessengerDto } from './dto/update-messenger.dto';
import { MessengerRepository } from './messenger.repository';
export declare class MessengerService {
    private readonly messengerRepository;
    private readonly userService;
    constructor(messengerRepository: MessengerRepository, userService: UserService);
    create(createMessengerDto: CreateMessengerDto): Promise<import("./entities/messenger.entity").Messenger>;
    findAll(): Promise<import("./entities/messenger.entity").Messenger[]>;
    findOne(id: number): Promise<import("./entities/messenger.entity").Messenger>;
    update(id: number, updateMessengerDto: UpdateMessengerDto): Promise<import("./entities/messenger.entity").Messenger>;
    remove(id: number): Promise<void>;
}
