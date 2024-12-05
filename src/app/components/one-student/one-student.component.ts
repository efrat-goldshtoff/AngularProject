import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Student } from '../../models/student';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [InfromationPopupComponent],
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.css'
})
export class OneStudentComponent {

  // myVariable: Student= new Student(123457,'efrat','levi','rabi','0556789542',false,45,new Date('01/01/2024'))
  // @Input () id:number=0;
  // @Input() list:student[] = [];
  // @Input () currentStudent: any;
  // @Output() onSaveStudent : EventEmitter<any>= new EventEmitter<any>()
  // saveStudent(Name:string, Address:string,Phone:string ,AvgMark:number,DepartureDate?:Date){
  //   this.stud=new student(this.count,Name,Address,Phone,AvgMark,DepartureDate)
  //   this.count=this.count+1;
  //   this.saveStudent.emit(this.stud)}
  // showDetails(){  
  //     let index = this.currentStudent.findIndex(stu => stu.id==this.id);
  //     return this.currentStudent

  //   }
  count = 4
  stud = new Student(2, "", "", "", 34, true, new Date(), true);
  @Input() currentStudent: any;
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();

  saveChild(Name: string, Address: string, Phone: string, AvgMark: number, Ispay: boolean) {
    this.stud = new Student(this.count, Name, Address, Phone, AvgMark, true, new Date(), Ispay)
    this.count = this.count + 1;
    this.saveStudent.emit(this.stud)
  }

  @ViewChild(InfromationPopupComponent)
  child: InfromationPopupComponent = new InfromationPopupComponent;
  @ViewChild('p1') childP!: ElementRef;

  allStudents: string[] = [];

  flag = false;

  DeleteStudent() {
    this.child.ShowPopup('האם אתה בטוח שברצונך למחוק את התלמיד הנוכחי?');
    this.flag = true;

  }
  CloseCard() {
    this.child.ShowPopup('');
    this.flag = false;
  }
}
