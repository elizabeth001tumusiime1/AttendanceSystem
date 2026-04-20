import { Class } from './class.entity';
export declare class Student {
    id: number;
    schoolId: number;
    classId: number;
    admissionNumber: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    status: string;
    createdAt: Date;
    class: Class;
    get name(): string;
}
