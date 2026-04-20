import { ClassesService } from './classes.service';
import { Class } from '../../entities/class.entity';
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(classData: Partial<Class>): Promise<Class>;
    findAll(): Promise<Class[]>;
    findOne(id: string): Promise<Class | null>;
    update(id: string, classData: Partial<Class>): Promise<Class | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
