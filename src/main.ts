import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CourseCreatePageComponent } from './app/course-create-page/course-create-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', children: [{ path: 'create', component: CourseCreatePageComponent }] }
    ])
  ]
});
