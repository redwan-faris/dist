import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';
export declare class TokenController {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    create(createTokenDto: CreateTokenDto): Promise<Token>;
    findAll(userId: string): Promise<Token[]>;
    findOne(id: string): Promise<Token>;
    update(id: string, updateTokenDto: UpdateTokenDto): Promise<Token>;
    remove(id: string): Promise<void>;
}
