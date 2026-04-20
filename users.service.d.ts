import { Repository } from 'typeorm';
import { User, UserRole } from '../../entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneByEmail(email: string): Promise<User | null>;
    findOneById(id: number): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    findAll(role?: UserRole): Promise<User[]>;
    update(id: number, userData: Partial<User>): Promise<User>;
    delete(id: number): Promise<void>;
}
