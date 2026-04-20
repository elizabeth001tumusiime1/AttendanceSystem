"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const attendance_entity_1 = require("../../entities/attendance.entity");
let AttendanceService = class AttendanceService {
    attendanceRepository;
    constructor(attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }
    findAll(filters) {
        const where = {};
        if (filters?.studentId)
            where.studentId = filters.studentId;
        if (filters?.classId)
            where.classId = filters.classId;
        if (filters?.startDate && filters?.endDate) {
            where.date = (0, typeorm_2.Between)(filters.startDate, filters.endDate);
        }
        else if (filters?.startDate) {
            where.date = filters.startDate;
        }
        return this.attendanceRepository.find({
            where,
            relations: ['student', 'class', 'markedBy'],
            order: { date: 'DESC' },
        });
    }
    async markAttendance(records, markedById) {
        const recordsWithSchool = records.map(r => ({
            schoolId: 1,
            markedById,
            ...r,
        }));
        return this.attendanceRepository.upsert(recordsWithSchool, {
            conflictPaths: ['studentId', 'date'],
            skipUpdateIfNoValuesChanged: true,
        });
    }
    async updateRecord(id, record) {
        await this.attendanceRepository.update(id, record);
        return this.attendanceRepository.findOne({ where: { id }, relations: ['student', 'class'] });
    }
    async getStats() {
        const records = await this.attendanceRepository.find();
        const total = records.length;
        const present = records.filter(r => r.status === 'present').length;
        const absent = records.filter(r => r.status === 'absent').length;
        const late = records.filter(r => r.status === 'late').length;
        return { total, present, absent, late };
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendance_entity_1.Attendance)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map