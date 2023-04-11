import { Component } from '@angular/core';
import { CourseBaseFormComponent } from '../course-base-form/course-base-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-create-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: '../course-base-form/course-base-form.component.html',
  styleUrls: ['../course-base-form/course-base-form.component.scss']
})
export class CourseCreatePageComponent extends CourseBaseFormComponent {
  override onSubmit() {
    super.onSubmit();
    console.log(this.form.value);
    // api call to create course
  }
}
