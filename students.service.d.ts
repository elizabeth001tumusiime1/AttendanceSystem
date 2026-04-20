import { Repository } from 'typeorm';
import { Student } from '../../entities/student.entity';
export declare class StudentsService {
    private studentsRepository;
    constructor(studentsRepository: Repository<Student>);
    findAll(classId?: number): Promise<Student[]>;
    findOne(id: number): Promise<Student | null>;
    create(studentData: Partial<Student>): Promise<Student>;
    update(id: number, studentData: Partial<Student>): Promise<Student | null>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
