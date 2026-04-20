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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const class_entity_1 = require("./class.entity");
let Student = class Student {
    id;
    schoolId;
    classId;
    admissionNumber;
    firstName;
    lastName;
    gender;
    dateOfBirth;
    status;
    createdAt;
    class;
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'school_id' }),
    __metadata("design:type", Number)
], Student.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'class_id' }),
    __metadata("design:type", Number)
], Student.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'admission_number', type: 'text' }),
    __metadata("design:type", String)
], Student.prototype, "admissionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'text' }),
    __metadata("design:type", String)
], Student.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'text' }),
    __metadata("design:type", String)
], Student.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date_of_birth', type: 'date', nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: 'active' }),
    __metadata("design:type", String)
], Student.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Student.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_entity_1.Class, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'class_id' }),
    __metadata("design:type", class_entity_1.Class)
], Student.prototype, "class", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)('students')
], Student);
//# sourceMappingURL=student.entity.js.map