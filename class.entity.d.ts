import { User } from './user.entity';
export declare class Class {
    id: number;
    schoolId: number;
    name: string;
    teacherId: number;
    teacher: User;
    createdAt: Date;
}
