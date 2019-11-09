import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:id',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
