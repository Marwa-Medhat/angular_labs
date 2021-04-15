import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { course } from '../Models/course.model';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss'],
})
export class CoursedetailsComponent implements OnInit {
  private _routeParamsSub: Subscription;
  course: course;

  constructor(
    private _route: ActivatedRoute,
    private _coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this._coursesService
          .getCourseById(paramMap.get('id'))
          .subscribe((res: any) => {
            this.course = res.data;
          });
      }
    });
  }
}
