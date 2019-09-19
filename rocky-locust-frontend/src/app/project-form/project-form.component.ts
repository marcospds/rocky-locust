import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';
 
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
 
  project: Project;
 
  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {
    this.project = new Project();
  }
 
  onSubmit() {
    this.projectService.save(this.project).subscribe(result => this.gotoProjectList());
  }
 
  gotoProjectList() {
    this.router.navigate(['/projects']);
  }
}