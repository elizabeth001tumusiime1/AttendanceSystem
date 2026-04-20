import { Student } from './student.entity';
import { Class } from './class.entity';
import { User } from './user.entity';
export declare enum AttendanceStatus {
    PRESENT = "present",
    ABSENT = "absent",
    LATE = "late"
}
export declare class Attendance {
    id: number;
    schoolId: number;
    studentId: number;
    student: Student;
    classId: number;
    class: Class;
    date: string;
    status: AttendanceStatus;
    lateReason: string;
    markedById: number;
    markedBy: User;
    markedAt: Date;
}
