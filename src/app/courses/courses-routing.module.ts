import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
// import { CourseFormComponent } from '../course-form/course-form.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
// import { CourseFormComponent } from './course-form/course-form.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AuthGuard } from './gaurds/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: CourseReactiveFormComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: CoursedetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
