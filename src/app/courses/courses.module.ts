import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent],
  imports: [CommonModule, CoursesRoutingModule, FormsModule],
})
export class CoursesModule {}
