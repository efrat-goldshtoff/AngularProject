import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesComponent } from "./components/courses/courses.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { InfromationPopupComponent } from "./components/infromation-popup/infromation-popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoursesComponent, StudentListComponent, InfromationPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
