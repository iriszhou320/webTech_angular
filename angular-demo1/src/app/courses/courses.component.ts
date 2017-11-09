import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService]
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
