import { StudentsService } from './students.service';
import { Student } from '../../entities/student.entity';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(studentData: Partial<Student>): Promise<Student>;
    findAll(classId?: string): Promise<Student[]>;
    findOne(id: string): Promise<Student | null>;
    update(id: string, studentData: Partial<Student>): Promise<Student | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
