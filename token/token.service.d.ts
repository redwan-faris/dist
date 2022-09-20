import { NotificationsService } from 'src/notifications/notifications.service';
import { User } from 'src/user/entities/user.entity';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';
import { TokenRepositoy } from './token.repository';
export declare class TokenService {
    private readonly tokenRepository;
    private readonly notificationsService;
    constructor(tokenRepository: TokenRepositoy, notificationsService: NotificationsService);
    create(createTokenDto: CreateTokenDto, user?: User): Promise<Token>;
    findAll(userId: number): Promise<Token[]>;
    findOne(id: number): Promise<Token>;
    update(id: number, updateTokenDto: UpdateTokenDto): Promise<Token>;
    remove(id: number): Promise<void>;
}
