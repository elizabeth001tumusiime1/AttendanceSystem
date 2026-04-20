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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = exports.AttendanceStatus = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
const class_entity_1 = require("./class.entity");
const user_entity_1 = require("./user.entity");
var AttendanceStatus;
(function (AttendanceStatus) {
    AttendanceStatus["PRESENT"] = "present";
    AttendanceStatus["ABSENT"] = "absent";
    AttendanceStatus["LATE"] = "late";
})(AttendanceStatus || (exports.AttendanceStatus = AttendanceStatus = {}));
let Attendance = class Attendance {
    id;
    schoolId;
    studentId;
    student;
    classId;
    class;
    date;
    status;
    lateReason;
    markedById;
    markedBy;
    markedAt;
};
exports.Attendance = Attendance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Attendance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'school_id' }),
    __metadata("design:type", Number)
], Attendance.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'student_id' }),
    __metadata("design:type", Number)
], Attendance.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'student_id' }),
    __metadata("design:type", student_entity_1.Student)
], Attendance.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'class_id' }),
    __metadata("design:type", Number)
], Attendance.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_entity_1.Class, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'class_id' }),
    __metadata("design:type", class_entity_1.Class)
], Attendance.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Attendance.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AttendanceStatus,
        default: AttendanceStatus.PRESENT,
    }),
    __metadata("design:type", String)
], Attendance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reason', nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "lateReason", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'marked_by', nullable: true }),
    __metadata("design:type", Number)
], Attendance.prototype, "markedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'marked_by' }),
    __metadata("design:type", user_entity_1.User)
], Attendance.prototype, "markedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'marked_at' }),
    __metadata("design:type", Date)
], Attendance.prototype, "markedAt", void 0);
exports.Attendance = Attendance = __decorate([
    (0, typeorm_1.Entity)('attendance')
], Attendance);
//# sourceMappingURL=attendance.entity.js.map