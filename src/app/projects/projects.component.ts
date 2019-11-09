import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: number[] = [1,2,3,4,5,6,7,8,];
  tags: number[] = [1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {
  }

}
