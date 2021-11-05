import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design imports
import { MatSliderModule } from '@angular/material/slider';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLiustudentsecondhandComponent } from './project-liustudentsecondhand/project-liustudentsecondhand.component';
import { ProjectThumbnailComponent } from './project-thumbnail/project-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProjectsComponent,
    ProjectLiustudentsecondhandComponent,
    ProjectThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
