import { Injectable } from '@angular/core';
import { teacher } from '../../models/teacher';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  private teachers = [
    new teacher('123', 'michal',
      [new Student(484, 'tami', 'r akiva', '0527167161', 90),
      new Student(154, 'sari', 'r tarphon', '0527125161', 91)]),
    new teacher('985', 'yael',
      [new Student(566, 'yocheved', 'harav lando', '0527162561', 95),
      new Student(874, 'shulamit', 'dakar', '0527845161', 88)
      ])]
  //get
  getTeachers() {
    return this.teachers;
  }
  getTeacherById(id: string) {
    return this.teachers.find(tchr => tchr.Id == id)
  }

  //add
  addTeacher(teacher: teacher) {
    if (this.getTeacherById(teacher.Id) == undefined)
      this.teachers.push(teacher);
  }
  //update
  updateTeacher(teacher: teacher) {

    for (let index = 0; index < this.teachers.length; index++) {
      if (teacher.Id == this.teachers[index].Id) {
        this.teachers[index] = teacher
      }
    }
  }
  //delete
  deleteTeacher(id: string) {
    for (let index = 0; index < this.teachers.length; index++) {
      if (this.teachers[index].Id == id) {
        this.teachers.splice(index, 1)
      }
    }
  }
}
