import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, AfterContentChecked,AfterViewChecked ,OnDestroy, AfterContentInit, AfterViewInit, DoCheck{

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService, @Attribute('type') private type: string) {
      //console.log(type)
      console.log("constructor", this.course)
    }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
    }

    ngDoCheck() {
      console.log("ngDoCheck")
    }

  ngOnChanges(changes){
      console.log("ngOnChanges", changes);
    }


    ngOnInit() {
      console.log("ngOnInit", this.course)
      //console.log("courseService course card", this.coursesService)
    }

    ngAfterContentChecked(){
      console.log("ngAfterContentChecked");
    }

    ngAfterViewChecked() {
      console.log("ngAfterViewChecked")
    }

  ngOnDestroy(){
      console.log("ngOnDestroy")
    }


    onSaveClicked(description:string) {

         this.courseEmitter.emit({...this.course, description});

    }

  onTitleChanged(newTitle: string){
    this.course.description = newTitle;
  }




}
