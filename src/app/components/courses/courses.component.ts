import { Component } from '@angular/core';
import { courses } from '../../models/courses';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  course : courses[];
  constructor(private courseService: CourseService) { 
    this.course = this.courseService.getCourses();
  }
}
