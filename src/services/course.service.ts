import { Injectable } from '@angular/core';
import { courses } from '../app/models/courses';
import { esubject } from '../app/models/esubject';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }
  private courses = [new courses('123', 'shalom', esubject.English),
  new courses('456', 'hello', esubject.Math),
  new courses('789', 'good by', esubject.Tichnut)
  ]
  getCourses() {
    return this.courses;
  }
  getCourseById(id: string) {
    return this.courses.find(course => course.IdCourse == id)
  }
}
