import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { InfromationPopupComponent } from './components/infromation-popup/infromation-popup.component';
import { OneStudentComponent } from './components/one-student/one-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';

export const routes: Routes = [

    { path: 'courses',component:CoursesComponent},
    { path: 'information-popup', component:InfromationPopupComponent},
    { path: 'one-student', component: OneStudentComponent},
    { path: 'student-list', component:StudentListComponent},
    { path: 'teacher-form', component:TeacherFormComponent}
];
