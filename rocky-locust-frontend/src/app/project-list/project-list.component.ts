import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';
 
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 
  projects: Project[];
 
  constructor(private projectService: ProjectService) {
  }
 
  ngOnInit() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;
    });
  }
}