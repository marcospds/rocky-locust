import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './service/project.service';
import { HostService } from './service/host.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectViewComponent } from './project-view/project-view.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService, HostService],
  bootstrap: [AppComponent]
})
export class AppModule { }