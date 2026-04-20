import { Repository } from 'typeorm';
import { Class } from '../../entities/class.entity';
export declare class ClassesService {
    private classesRepository;
    constructor(classesRepository: Repository<Class>);
    findAll(): Promise<Class[]>;
    findOne(id: number): Promise<Class | null>;
    create(classData: Partial<Class>): Promise<Class>;
    update(id: number, classData: Partial<Class>): Promise<Class | null>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
