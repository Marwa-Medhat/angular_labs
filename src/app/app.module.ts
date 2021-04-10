import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighLightDirective } from './high-light.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; // CLI imports AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { CourseFormComponent } from './course-form/course-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighLightDirective,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CourseFormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
