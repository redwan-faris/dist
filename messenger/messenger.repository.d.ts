import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateMessengerDto } from "./dto/create-messenger.dto";
import { UpdateMessengerDto } from "./dto/update-messenger.dto";
import { Messenger } from "./entities/messenger.entity";
export declare class MessengerRepository {
    private readonly messengerRepository;
    constructor(messengerRepository: Repository<Messenger>);
    addMessege(createMessengerDto: CreateMessengerDto, user: User): Promise<void>;
    findAllMesseges(): Promise<Messenger[]>;
    findOneMessege(id: number): Promise<Messenger>;
    updateMessege(updateMessegeDto: UpdateMessengerDto, id: number): Promise<Messenger>;
    deleteMessege(id: number): Promise<void>;
}
