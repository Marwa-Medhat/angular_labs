import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-reactive-form',
  templateUrl: './course-reactive-form.component.html',
  styleUrls: ['./course-reactive-form.component.scss'],
})
export class CourseReactiveFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);

    if (form.valid) {
      const course = form.value;
      console.log(course);
    }
  }
}
