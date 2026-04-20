import { Repository } from 'typeorm';
import { Attendance } from '../../entities/attendance.entity';
export declare class AttendanceService {
    private attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    findAll(filters?: {
        studentId?: number;
        classId?: number;
        startDate?: string;
        endDate?: string;
    }): Promise<Attendance[]>;
    markAttendance(records: Partial<Attendance>[], markedById?: number): Promise<import("typeorm").InsertResult>;
    updateRecord(id: number, record: Partial<Attendance>): Promise<Attendance | null>;
    getStats(): Promise<{
        total: number;
        present: number;
        absent: number;
        late: number;
    }>;
}
