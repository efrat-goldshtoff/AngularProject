// import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { TeacherFormComponent } from "./components/teacher-form/teacher-form.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TextToIconPipe } from "./pipes/text_to_icon/text-to-icon.pipe";
import { AuthService } from './services/auth/auth.service';
// import { FromServiceComponent } from './components/from-service/from-service.component';
// import { InfromationPopupComponent } from './components/infromation-popup/infromation-popup.component';
// import { CoursesComponent } from './components/courses/courses.component';
// import { OneStudentComponent } from './components/one-student/one-student.component';
// import { StudentListComponent } from './components/student-list/student-list.component';
// import { TextToIconPipe } from "./pipes/text_to_icon/text-to-icon.pipe";
// import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";
// import { TextToIconPipe } from "./pipes/text_to_icon/text-to-icon.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TextToIconPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService:AuthService){}
  [x: string]: any;
  title = 'my first app';
  str = "";
  GetStr(): string {
    let d = new Date();
    if (d.getHours() > 6 && d.getHours() < 12)
      return "בוקר טוב";
    if (d.getHours() >= 12 && d.getHours() < 19)
      return "צהרים טובים";
    return "ערב טוב";
  }


  items = ['שמח', 'עצוב', 'חושב', 'ישן', 'צוחק'];
  word: string = '';

  onSelect(item: string) {
    this.word = item;
  }

}
