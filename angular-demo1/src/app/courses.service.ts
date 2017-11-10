import { Injectable } from '@angular/core';


@Injectable()
export class CoursesService {
 
  //a list to hold courses 
     courseList:  string[] = [];
    
    
    
    getCourses(): string[] {
      return this.courseList;
    }
  
    saveCourse(c:String):void{
    this.courseList.push(c);
    }
    
    


}
