import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forget-password.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(loginDto: LoginDto): Promise<any>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    changePassword(user: User, changePasswordDto: ChangePasswordDto): Promise<void>;
}
