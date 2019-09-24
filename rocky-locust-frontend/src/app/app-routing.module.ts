import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectViewComponent } from './project-view/project-view.component';
 
const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'addproject', component: ProjectFormComponent },
  { path: 'projects/:id', component: ProjectViewComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }