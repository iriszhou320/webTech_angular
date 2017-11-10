import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
import { appAutoGrowDirective } from '../auto-grow.directive';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService],
  directives: [appAutoGrowDirective],
  
})
export class CoursesComponent implements OnInit {
    
  
    // saveCourses(c:String){
    //     coursesService.saveCourse();
    //     this.courses = coursesService.getCourses();
    // }
   
   constructor(public coursesService: CoursesService;){
    this.courses = coursesService.courseList;
  }
  
   ngOnInit() {
        // this.courses = coursesService.getCourses();
  }
  
  title = "Add your courses here: ";
  courses;
  
 }
