import {Pipe, PipeTransform} from '@angular/core';
import {filter} from 'rxjs/operators';
import {Course} from '../model/course';


@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform{
  transform(courses: Course[], category: string) {
    return courses.filter(course => course.category === category)
  }
}