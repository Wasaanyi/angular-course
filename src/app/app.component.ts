import {Attribute, ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses/services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';


// provider manually constructed
//implement a provider factory function
// function coursesServiceProvider(http:HttpClient): CoursesService{
//   return new CoursesService(http);
// }
//
// // Create an injection token (unique name for the courses service)
// export  const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  //courses$: Observable<Course[]>
  courses: Course[] = COURSES;
  //courses = COURSES;

  coursesTotal = this.courses.length

  // @ts-ignore
  constructor (private coursesService: CoursesService,
               @Inject(CONFIG_TOKEN) private config: AppConfig ){


  }


  ngOnInit() {
    // const params = new HttpParams()
    //   .set("page", "1")
    //   .set("pageSize", "10");
    //
    // this.http.get('/api/courses', {params}).subscribe(
    //   courses => this.courses= courses
    // );

    this.refreshCourses()
    // console.log(this.coursesService)
  }

  // refreshCourses(){
  //   const params = new HttpParams()
  //     .set("page", "1")
  //     .set("pageSize", "10");
  //
  //   this.http.get('/api/courses', {params}).subscribe(courses => this.courses=courses)
  // }

  // refreshCourses(){
  //   const params = new HttpParams()
  //     .set("page", "1")
  //     .set("pageSize", "10");
  //
  //   this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  // }

  refreshCourses(){
    //this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses()
    //   .subscribe(courses => this.courses = courses)
  }

  save(course: Course){
    this.coursesService.saveCourse(course).subscribe(
      ()=> console.log('Course Saved!')
    );
  }

  onEditCourse(){

    // const course= this.courses[0];
    // const newCourse:any = {...course};
    //
    // newCourse.description = 'New Value!';
    //
    // this.courses[0] = newCourse;

    // this.courses = [undefined];

    // const course = this.courses[0];
    //
    // const newCourse = {
    //   ...course,
    //   description: 'ngOnChanges'
    // };
    //
    // this.courses[0] = newCourse;

    this.courses[1].category = 'ADVANCED';
  }





}
