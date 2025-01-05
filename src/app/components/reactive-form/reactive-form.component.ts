import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { teacher } from '../../models/teacher';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  @Input() teacher!:teacher;
  teacherForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.teacherForm=this.fb.group({
      tId:['',Validators.required],
      tName:[this.teacher?.Name,Validators.required],
    });
  }
  get f():{[key:string]:AbstractControl}{
    return this.teacherForm.controls;
  }
  onSubmit(){
    this.teacherForm.reset()
    console.log("succeed!!!");
    
  }

}
