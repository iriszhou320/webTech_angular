import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
import { appAutoGrowDirective } from '../auto-grow.directive';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService],
  directives: [appAutoGrowDirective]
})
export class CoursesComponent implements OnInit {

constructor(coursesService: CoursesService){
    this.courses = coursesService.getCourses();
  }
   ngOnInit() {
  }
  
  title = "this is a courses title page";
  courses;
  
  

}
