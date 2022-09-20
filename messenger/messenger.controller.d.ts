import { MessengerService } from './messenger.service';
import { CreateMessengerDto } from './dto/create-messenger.dto';
import { UpdateMessengerDto } from './dto/update-messenger.dto';
export declare class MessengerController {
    private readonly messengerService;
    constructor(messengerService: MessengerService);
    create(createMessengerDto: CreateMessengerDto): Promise<void>;
    findAll(): Promise<import("./entities/messenger.entity").Messenger[]>;
    findOne(id: string): Promise<import("./entities/messenger.entity").Messenger>;
    update(id: string, updateMessengerDto: UpdateMessengerDto): Promise<import("./entities/messenger.entity").Messenger>;
    remove(id: string): Promise<void>;
}
