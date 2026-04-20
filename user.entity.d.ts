export declare enum UserRole {
    ADMIN = "admin",
    TEACHER = "teacher"
}
export declare class User {
    id: number;
    schoolId: number;
    name: string;
    email: string;
    password: string;
    gender: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
}
