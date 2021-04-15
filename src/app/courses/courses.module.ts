import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

import { FormsModule } from '@angular/forms';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CoursedetailsComponent, CourseReactiveFormComponent],
  imports: [CommonModule, CoursesRoutingModule, FormsModule],
})
export class CoursesModule {}
