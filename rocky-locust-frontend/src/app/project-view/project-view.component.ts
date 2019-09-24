import { Component, OnInit } from '@angular/core';
import { Host } from '../model/host';
import { HostService } from '../service/host.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  hosts: Host[];
  private id: string;

  constructor(private hostService: HostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hostService.findAll(this.id).subscribe(data => {
      this.hosts = data;
    });
  
    this.id = this.route.snapshot.paramMap.get('id');
  }
}