import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CourseCreatePageComponent } from './app/course-create-page/course-create-page.component';
import { CourseEditPageComponent } from './app/course-edit-page/course-edit-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      {
        path: 'courses',
        children: [
          { path: 'create', component: CourseCreatePageComponent },
          { path: 'details', component: CourseEditPageComponent }
        ]
      }
    ])
  ]
});
