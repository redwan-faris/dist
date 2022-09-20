import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateTokenDto } from "./dto/create-token.dto";
import { UpdateTokenDto } from "./dto/update-token.dto";
import { Token } from "./entities/token.entity";
export declare class TokenRepositoy extends Repository<Token> {
    createToken(createTokenDto: CreateTokenDto, user: User): Promise<Token>;
    findALlTokens(): Promise<Token[]>;
    findTokenById(id: number): Promise<Token>;
    updateToken(id: number, updateTokenDto: UpdateTokenDto): Promise<Token>;
    removeToken(id: number): Promise<void>;
    findTokenByUserId(userId: number): Promise<Token[]>;
}
