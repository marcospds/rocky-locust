import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './service/project.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }