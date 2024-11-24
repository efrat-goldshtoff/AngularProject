import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { OneStudentComponent } from "../one-student/one-student.component";
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [OneStudentComponent, NgTemplateOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [
    new Student(12, "Chani", "Cohen", "0523275418", 92, true),
    new Student(34, "Tami", "Levi", "0523289584", 98, false)]
  selectedid = 0
  viewDetailsStudent(i: number) {
    this.selectedid = i
  }
  AddStudent() {
    this.selectedid = -1
  }
  ParentSave(std: Student) {
    this.students.push(std);
  }
}