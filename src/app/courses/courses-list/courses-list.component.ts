import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { course } from '../Models/course.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: course[];

  constructor(private _coursesService: CoursesService) {}

  ngOnInit(): void {
    this._coursesService.getCourses().subscribe((res: any) => {
      console.log(res);
      this.courses = res.data;
    });
  }
}
