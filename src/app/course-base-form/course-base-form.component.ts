import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-base-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [FormBuilder],
  templateUrl: './course-base-form.component.html',
  styleUrls: ['./course-base-form.component.scss']
})
export class CourseBaseFormComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: [''],
    description: [''],
    date: [new Date()],
    length: [0],
    authors: [''],
    isTopRated: [false]
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
  }
}
