import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CourseBaseFormComponent } from '../course-base-form/course-base-form.component';

@Component({
  selector: 'app-course-edit-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: '../course-base-form/course-base-form.component.html',
  styleUrls: ['../course-base-form/course-base-form.component.scss']
})
export class CourseEditPageComponent extends CourseBaseFormComponent {
  constructor() {
    super();
    // call api to get course details
    this.form.patchValue({
      name: 'Angular',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
      date: new Date(2021, 1, 1),
      length: 120,
      authors: 'Ivan',
      isTopRated: true
    });
  }

  override onSubmit() {
    super.onSubmit();
    console.log(this.form.value);
    // api call to update course
  }

}
