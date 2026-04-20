import { AttendanceService } from './attendance.service';
import { Attendance } from '../../entities/attendance.entity';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    markAttendance(records: Partial<Attendance>[], req: any): Promise<import("typeorm").InsertResult>;
    findAll(studentId?: string, classId?: string, startDate?: string, endDate?: string): Promise<Attendance[]>;
    getStats(): Promise<{
        total: number;
        present: number;
        absent: number;
        late: number;
    }>;
    update(id: string, record: Partial<Attendance>): Promise<Attendance | null>;
}
