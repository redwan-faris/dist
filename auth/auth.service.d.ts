import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { UserService } from 'src/user/user.service';
import { AuthRepository } from './auth.repository';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forget-password.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private authRepo;
    private jwtService;
    private tokenService;
    private userService;
    constructor(authRepo: AuthRepository, jwtService: JwtService, tokenService: TokenService, userService: UserService);
    login(loginDto: LoginDto): Promise<any>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    changePassword(userId: number, changePasswordDto: ChangePasswordDto): Promise<void>;
}
