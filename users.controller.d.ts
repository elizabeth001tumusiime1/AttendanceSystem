import { UsersService } from './users.service';
import { User, UserRole } from '../../entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: Partial<User>): Promise<User>;
    findAll(role?: UserRole): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, userData: Partial<User>): Promise<User>;
    remove(id: string): Promise<void>;
}
