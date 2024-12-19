import { Component, Input } from '@angular/core';
import { teacher } from '../../models/teacher';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { TeacherService } from '../../services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {

  @Input() teacher1 = new teacher('', '', []);
  students = this.teacher1.Class;
  constructor(public teacherService: TeacherService) { }

  onSubmit(id: string) {
    if (this.teacherService.getTeacherById(id) == undefined) {
      this.teacherService.addTeacher(this.teacher1);
    } else {
      this.teacherService.updateTeacher(this.teacher1);
    }

    this.teacher1 = new teacher('', '', []);
  }

}
