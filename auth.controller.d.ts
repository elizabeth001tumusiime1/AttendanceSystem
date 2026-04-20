import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            email: any;
            sub: any;
            role: any;
            name: any;
        };
    }>;
    validate(token: string): Promise<any>;
}
