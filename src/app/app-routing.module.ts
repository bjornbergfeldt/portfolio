import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLiustudentsecondhandComponent } from './project-liustudentsecondhand/project-liustudentsecondhand.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'liustudentsecondhand', component: ProjectLiustudentsecondhandComponent, 
  data: {
    title: 'Title for First Component',
    descrption: 'Description of First Component'
  } },
  { path: 'receptly', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
