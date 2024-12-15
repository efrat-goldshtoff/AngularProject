import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TeacherFormComponent } from "./components/teacher-form/teacher-form.component";
// import { CoursesComponent } from "./components/courses/courses.component";
// import { StudentListComponent } from "./components/student-list/student-list.component";
// import { InfromationPopupComponent } from "./components/infromation-popup/infromation-popup.component";
// import { TextToIconPipe } from "./pipes/text_to_icon/text-to-icon.pipe";
// import { CoursesComponent } from './components/courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TeacherFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'my-first-app';
  str = "";
  GetStr(): string {
    let d = new Date();
    if (d.getHours() > 6 && d.getHours() < 12)
      return "בוקר טוב";
    if (d.getHours() >= 12 && d.getHours() < 19)
      return "צהרים טובים";
    return "ערב טוב";
  }

  
  // items = ['שמח', 'עצוב', 'חושב','ישן','צוחק'];
  // word: string = '';

  // onSelect(item: string) {
  //   this.word = item;
  // }

}
